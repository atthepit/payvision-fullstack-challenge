import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import TransactionRow from "../TransactionRow";
import { transactions } from "../../../tests/fixtures";

afterEach(cleanup);

test("Handle click", () => {
  const handleClick = jest.fn();
  const transaction = transactions[0];
  const showDetails = false;
  const { getByTestId } = render(
    <TransactionRow
      id={transaction.id}
      name={transaction.card.holderName}
      brand={transaction.brandId}
      lastFourDigits={transaction.card.lastFourDigits}
      action={transaction.action}
      amount={transaction.amount}
      currencyCode={transaction.currencyCode}
      trackingCode={transaction.trackingCode}
      brandId={transaction.brandId}
      firstSixDigits={transaction.card.firstSixDigits}
      expiryMonth={transaction.card.expiryMonth}
      expiryYear={transaction.card.expiryYear}
      showDetails={showDetails}
      handleClick={handleClick}
      nameSpan={1}
      actionSpan={1}
      amountSpan={1}
      currencyCodeSpan={1}
    />
  );

  const row = getByTestId(transaction.id);
  fireEvent.click(row);
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(handleClick).toHaveBeenCalledWith(transaction.id);
});

test("handle click with empty string if already open", () => {
  const handleClick = jest.fn();
  const transaction = transactions[0];
  const showDetails = true;
  const { getByTestId } = render(
    <TransactionRow
      id={transaction.id}
      name={transaction.card.holderName}
      brand={transaction.brandId}
      lastFourDigits={transaction.card.lastFourDigits}
      action={transaction.action}
      amount={transaction.amount}
      currencyCode={transaction.currencyCode}
      trackingCode={transaction.trackingCode}
      brandId={transaction.brandId}
      firstSixDigits={transaction.card.firstSixDigits}
      expiryMonth={transaction.card.expiryMonth}
      expiryYear={transaction.card.expiryYear}
      showDetails={showDetails}
      handleClick={handleClick}
      nameSpan={1}
      actionSpan={1}
      amountSpan={1}
      currencyCodeSpan={1}
    />
  );

  const row = getByTestId(transaction.id);
  fireEvent.click(row);
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(handleClick).toHaveBeenCalledWith("");
});

test("show details", () => {
  const handleClick = jest.fn();
  const transaction = transactions[0];
  const showDetails = true;
  const { getByText } = render(
    <TransactionRow
      id={transaction.id}
      name={transaction.card.holderName}
      brand={transaction.brandId}
      lastFourDigits={transaction.card.lastFourDigits}
      action={transaction.action}
      amount={transaction.amount}
      currencyCode={transaction.currencyCode}
      trackingCode={transaction.trackingCode}
      brandId={transaction.brandId}
      firstSixDigits={transaction.card.firstSixDigits}
      expiryMonth={transaction.card.expiryMonth}
      expiryYear={transaction.card.expiryYear}
      showDetails={showDetails}
      handleClick={handleClick}
      nameSpan={1}
      actionSpan={1}
      amountSpan={1}
      currencyCodeSpan={1}
    />
  );

  const element = getByText(transaction.id);
  expect(element).toBeDefined();
});

test("snapshot", () => {
  const handleClick = jest.fn();
  const transaction = transactions[0];
  const showDetails = true;
  const { container } = render(
    <TransactionRow
      id={transaction.id}
      name={transaction.card.holderName}
      brand={transaction.brandId}
      lastFourDigits={transaction.card.lastFourDigits}
      action={transaction.action}
      amount={transaction.amount}
      currencyCode={transaction.currencyCode}
      trackingCode={transaction.trackingCode}
      brandId={transaction.brandId}
      firstSixDigits={transaction.card.firstSixDigits}
      expiryMonth={transaction.card.expiryMonth}
      expiryYear={transaction.card.expiryYear}
      showDetails={showDetails}
      handleClick={handleClick}
      nameSpan={3}
      actionSpan={3}
      amountSpan={2}
      currencyCodeSpan={2}
    />
  );

  expect(container).toMatchSnapshot();
});

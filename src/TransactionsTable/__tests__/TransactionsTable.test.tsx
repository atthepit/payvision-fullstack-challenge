import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import TransactionsTable from "../TransactionsTable";
import { transactions } from "../../../tests/fixtures";

afterEach(cleanup);

test("shows transactions rows", () => {
  const { getByTestId } = render(
    <TransactionsTable transactions={transactions} />
  );

  const rows = transactions
    .map(transaction => getByTestId(transaction.id))
    .filter(Boolean);
  expect(rows.length).toEqual(transactions.length);
});

test("opens transaction details on click", () => {
  const { getByTestId } = render(
    <TransactionsTable transactions={transactions} />
  );

  const firstTransaction = transactions[0];
  const firstId = getByTestId(`${firstTransaction.id}-details`);
  expect(firstId.getAttribute("data-hidden")).toBe("true");
  fireEvent.click(getByTestId(firstTransaction.id));
  expect(firstId.getAttribute("data-hidden")).toBe("false");

  const secondTransaction = transactions[1];
  const secondId = getByTestId(`${secondTransaction.id}-details`);
  expect(secondId.getAttribute("data-hidden")).toBe("true");
  fireEvent.click(getByTestId(secondTransaction.id));
  expect(secondId.getAttribute("data-hidden")).toBe("false");
  expect(firstId.getAttribute("data-hidden")).toBe("true");
});

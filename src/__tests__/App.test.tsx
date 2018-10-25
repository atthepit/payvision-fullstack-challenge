import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  RenderResult
} from "react-testing-library";
import App from "../App";
import { search, Transaction, Filters } from "../transactions/transactions";
import { transactions } from "../../tests/fixtures";

jest.mock("../transactions/transactions");

function filterTransactions({ action, currencyCode }: Filters) {
  return transactions.filter(
    t => t.action === action && t.currencyCode === currencyCode
  );
}

function getUtils(utils: RenderResult) {
  return {
    ...utils,
    getTransactionRows,
    testSearchFor
  };

  function getTransactionRows(ts: Transaction[]) {
    const { getByTestId } = utils;
    return waitForElement(() => ts.map(t => () => getByTestId(t.id)));
  }

  async function testSearchFor(filters: Filters) {
    const numFilters = Object.keys(filters).length;
    const ts: Transaction[] =
      numFilters > 0 ? filterTransactions(filters) : transactions;

    const { getByText } = utils;
    setFilters(filters);
    const searchButton = getByText("Search");
    search.mockImplementationOnce(() => Promise.resolve(ts));
    fireEvent.click(searchButton);

    expect(search).toHaveBeenLastCalledWith(filters);
    const rows = await getTransactionRows(ts);
    expect(rows.length).toEqual(ts.length);
  }

  function setFilters({ action = "", currencyCode = "" }: Filters) {
    const { getByLabelText } = utils;
    const actionNode = getByLabelText("Action") as HTMLSelectElement;
    const currencyCodeNode = getByLabelText(
      "Currency Code"
    ) as HTMLSelectElement;
    actionNode.value = action;
    currencyCodeNode.value = currencyCode;
  }
}

afterEach(cleanup);
afterEach(() => {
  search.mockReset();
});

test("handleSearch", async () => {
  search.mockImplementation(() => Promise.resolve(transactions));
  const { testSearchFor, getTransactionRows } = getUtils(render(<App />));
  const rows = await getTransactionRows(transactions);
  expect(rows.length).toEqual(transactions.length);

  testSearchFor({ action: "payment", currencyCode: "EUR" });
  testSearchFor({ action: "credit", currencyCode: "USD" });

  expect(search).toHaveBeenCalledTimes(3);
});

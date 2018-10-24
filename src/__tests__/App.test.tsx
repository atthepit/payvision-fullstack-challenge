import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import App from "../App";
import { search } from "../transactions/transactions";
jest.mock("../transactions/transactions");

afterEach(cleanup);
afterEach(() => {
  search.mockReset();
});

test("handleSearch", async () => {
  search.mockImplementation(() => Promise.resolve([]));
  const { getByLabelText, getByText, getByTestId } = render(<App />);
  let resultNode = await waitForElement(() => getByTestId("transactions"));
  expect(resultNode.textContent).toMatch("0");

  const actionNode = getByLabelText("Action") as HTMLSelectElement;
  const currencyCodeNode = getByLabelText("Currency Code") as HTMLSelectElement;
  const searchButton = getByText("Search");

  let action = "payment";
  let currencyCode = "EUR";
  actionNode.value = action;
  currencyCodeNode.value = currencyCode;

  search.mockImplementationOnce(() => Promise.resolve([{}]));
  fireEvent.click(searchButton);
  resultNode = await waitForElement(() => getByTestId("transactions"));
  expect(resultNode.textContent).toMatch("1");
  expect(search).toHaveBeenLastCalledWith({ action, currencyCode });

  action = "payment";
  currencyCode = "USD";
  actionNode.value = action;
  currencyCodeNode.value = currencyCode;

  search.mockImplementationOnce(() => Promise.resolve([{}, {}]));
  fireEvent.click(searchButton);
  resultNode = await waitForElement(() => getByTestId("transactions"));
  expect(resultNode.textContent).toMatch("2");
  expect(search).toHaveBeenLastCalledWith({ action, currencyCode });

  expect(search).toHaveBeenCalledTimes(3);
});

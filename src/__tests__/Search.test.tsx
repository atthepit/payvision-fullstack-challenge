import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import Search from "../Search";

afterEach(cleanup);

test("call onSearch with filters on submit", () => {
  const onSearch = jest.fn();
  const { container, getByLabelText, getByText } = render(
    <Search onSearch={onSearch} />
  );

  const form = container.querySelector("form");
  if (form == null) {
    fail("Expected form to be rendered ");
    return;
  }

  const actionNode = getByLabelText("Action") as HTMLSelectElement;
  const currencyCodeNode = getByLabelText("Currency Code") as HTMLSelectElement;
  const searchButton = getByText("Search");

  actionNode.value = "payment";
  currencyCodeNode.value = "EUR";
  fireEvent.click(searchButton);

  expect(onSearch).toHaveBeenCalledTimes(1);
  expect(onSearch).toHaveBeenCalledWith({
    action: actionNode.value,
    currencyCode: currencyCodeNode.value
  });
});

test("call onSearch with empty object if no filter is selected", () => {
  const onSearch = jest.fn();
  const { container } = render(<Search onSearch={onSearch} />);

  const form = container.querySelector("form");
  if (form == null) {
    fail("Expected form to be rendered ");
    return;
  }

  fireEvent.submit(form);

  expect(onSearch).toHaveBeenCalledTimes(1);
  expect(onSearch).toHaveBeenCalledWith({});
});

test("call onSearch with one filter if only one filter is selected", () => {
  const onSearch = jest.fn();
  const { container, getByLabelText, getByText } = render(
    <Search onSearch={onSearch} />
  );

  const form = container.querySelector("form");
  if (form == null) {
    fail("Expected form to be rendered ");
    return;
  }

  const actionNode = getByLabelText("Action") as HTMLSelectElement;

  actionNode.value = "payment";
  fireEvent.submit(form);

  expect(onSearch).toHaveBeenCalledTimes(1);
  expect(onSearch).toHaveBeenCalledWith({
    action: actionNode.value
  });
});

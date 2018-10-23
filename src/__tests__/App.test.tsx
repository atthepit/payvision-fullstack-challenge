import React from "react";
import { create } from "react-test-renderer";
import App from "../App";
import { search } from "../transactions/transactions";
jest.mock("../transactions/transactions");

test("snapshot", () => {
  search.mockImplementation(() => Promise.resolve([]));
  const c = create(<App name="Pedro" />);
  expect(c.toJSON()).toMatchSnapshot();
});

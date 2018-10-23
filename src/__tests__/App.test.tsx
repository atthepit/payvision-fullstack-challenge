import React from "react";
import { create } from "react-test-renderer";
import App from "../App";

test("snapshot", () => {
  const c = create(<App name="Pedro" />);
  expect(c.toJSON()).toMatchSnapshot();
});

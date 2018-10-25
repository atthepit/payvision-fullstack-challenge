import axios from "axios";
import { search } from "../transactions";
import { transactions } from "../../../tests/fixtures";

jest.mock("axios");

test("should return transactions list", async () => {
  const resp = { data: transactions };
  axios.get.mockResolvedValue(resp);
  const result = await search();
  expect(result).toBe(transactions);
});

test("should throw invalid filter error with invalid filter", async () => {
  axios.get.mockImplementation(() =>
    Promise.reject({ response: { data: { message: "INVALID_FILTER" } } })
  );
  try {
    await search({ invalid: "filter" });
    fail("Search did not fail as expected");
  } catch (error) {
    expect(error.message).toEqual("One or more invalid filters");
  }
});

test("should throw unexpected error", async () => {
  const message = "UNEXPECTED";
  axios.get.mockImplementation(() =>
    Promise.reject({ response: { data: { message } } })
  );
  try {
    await search();
    fail("Search did not fail as expected");
  } catch (error) {
    expect(error.message).toEqual(`Unexpected error: ${message}`);
  }
});

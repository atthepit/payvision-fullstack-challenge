import axios from "axios";
import { search, Transaction } from "../transactions";

jest.mock("axios");

const transactions: Transaction[] = [
  {
    action: "payment",
    amount: 100,
    brandId: 1060,
    card: {
      expiryMonth: "03",
      expiryYear: "2020",
      firstSixDigits: "378282",
      lastFourDigits: "0005",
      holderName: "Meredith Gerlach"
    },
    currencyCode: "USD",
    id: "7b1c2fef-a001-460b-9d9a-7a6d849b1d5d",
    trackingCode: "24c22a09-5a94-4552-83de-6128f360b906"
  },
  {
    action: "payment",
    amount: 100,
    brandId: 1020,
    card: {
      expiryMonth: "08",
      expiryYear: "2019",
      firstSixDigits: "510510",
      lastFourDigits: "5100",
      holderName: "Ellis Deckow"
    },
    currencyCode: "USD",
    id: "3d7fe7d9-0c88-42a5-997a-2bd44c8ce22d",
    trackingCode: "caf23319-85f3-4691-8d87-0e7790733990"
  }
];

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
    await search();
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

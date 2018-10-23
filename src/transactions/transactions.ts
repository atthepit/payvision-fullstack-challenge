import axios, { AxiosRequestConfig } from "axios";
import TransactionInvalidFilterError from "./transactionInvalidFilterError";
import TransactionError from "./transactionError";

if (!process.env.API_USERNAME || !process.env.API_PASSWORD) {
  throw new Error("Missing API credentials");
}

if (!process.env.API_BASE_URL) {
  throw new Error("Missing API configuration (API_BASE_URL)");
}

const CREDENTIALS = btoa(
  `${process.env.API_USERNAME}:${process.env.API_PASSWORD}`
);

const BASE_URL = process.env.API_BASE_URL;

interface Filters {
  action?: string;
  currencyCode?: string;
  orderBy?: string;
  [propName: string]: any;
}

function formatURL(filters: Filters) {
  let connector = "?";
  return Object.keys(filters).reduce((url, key) => {
    url = `${url}${connector}${key}=${filters[key]}`;
    connector = "&";
    return url;
  }, BASE_URL);
}

export interface Transaction {
  action: string;
  amount: number;
  brandId: number;
  card: {
    expiryMonth: string;
    expiryYear: string;
    firstSixDigits: string;
    lastFourDigits: string;
    holderName: string;
  };
  currencyCode: string;
  id: string;
  trackingCode: string;
}

export function search(filters?: Filters): Promise<Transaction[]> {
  filters = filters || {};
  const url = formatURL(filters);
  const config = {
    headers: {
      Authorization: `Basic ${CREDENTIALS}`
    }
  };

  return tryFetchTransaction(url, config);
}

async function tryFetchTransaction(url: string, config: AxiosRequestConfig) {
  try {
    return await fetchTransactions(url, config);
  } catch (error) {
    const { message } = error.response.data;
    if (message === "INVALID_FILTER") {
      throw new TransactionInvalidFilterError("One or more invalid filters");
    } else {
      throw new TransactionError(`Unexpected error: ${message}`);
    }
  }
}

async function fetchTransactions(url: string, config: AxiosRequestConfig) {
  const response = await axios.get(url, config);
  const transactions = response.data as Transaction[];
  return transactions;
}

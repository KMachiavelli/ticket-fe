import { getFromLocalStorage } from "../utils/storage/localStorageHelpers";
import { StorageKeys } from "../utils/storage/types";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "some-prod"
    : "http://localhost:8000/api/v1";

export const requestConfig = (configTypeJSON?: boolean): RequestInit => {
  const config: RequestInit = {
    cache: "no-cache",
    referrerPolicy: "no-referrer",
    headers: {
      Authorization: `Bearer ${
        getFromLocalStorage(StorageKeys.AUTH).accessToken
      }`,
    },
  };

  return configTypeJSON
    ? { ...config, headers: { "Content-Type": "application/json" } }
    : config;
};

export const ENDPOINTS = {
  tickets: {
    root: `${BASE_URL}/ticket`,
    cart: `${BASE_URL}/ticket/cart`,
  },
  transactions: {},
  user: {
    root: `${BASE_URL}/user`,
    login: `${BASE_URL}/user/authenticate`,
    account: `${BASE_URL}/user/account`,
  },
};

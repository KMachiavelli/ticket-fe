import { getFromLocalStorage } from "../../utils/storage/localStorageHelpers";
import { StorageKeys } from "../../utils/storage/types";

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
        getFromLocalStorage(StorageKeys.USER).accessToken
      }`,
    },
  };

  return configTypeJSON
    ? { ...config, headers: { "Content-Type": "application/json" } }
    : config;
};

export const ENDPOINTS = {
  tickets: {
    deliveryCost: `${BASE_URL}/ticket/delivery-cost`,
  },
  transactions: {},
  user: {
    login: `${BASE_URL}/user/login`,
    register: `${BASE_URL}/user/register`,
    account: `${BASE_URL}/user/account`,
  },
};

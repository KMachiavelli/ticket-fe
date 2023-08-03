import { StorageKeys } from "./types";

export const getFromLocalStorage = (key: StorageKeys) => {
  return JSON.parse(localStorage.getItem(key) || "{}");
};

export const setToLocalStorage = (key: StorageKeys, payload: any) => {
  localStorage.setItem(key, JSON.stringify(payload));
};

export const removeFromLocalStorage = (key: StorageKeys) => {
  localStorage.removeItem(key);
};

import {
  removeFromLocalStorage,
  setToLocalStorage,
} from "../../utils/storage/localStorageHelpers";
import { StorageKeys } from "../../utils/storage/types";
import { ENDPOINTS } from "../xhr/conf";
import { fetchData } from "../xhr/fetchData";
import { UserI } from "./types";

const { post } = fetchData();

const register = (username: string, password: string, email: string) => {
  return post(ENDPOINTS.user.register, {
    username,
    password,
    email,
  });
};

const login = (
  username: string,
  password: string
): Promise<Pick<UserI, "accessToken">> => {
  return post(ENDPOINTS.user.login, {
    username,
    password,
  }).then((data) => {
    setToLocalStorage(StorageKeys.USER, data);
    return data.json();
  });
};

const logout = () => {
  removeFromLocalStorage(StorageKeys.USER);
};

export const authService = {
  register,
  login,
  logout,
};

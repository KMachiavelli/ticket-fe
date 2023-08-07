import { ENDPOINTS } from "../../xhr/conf";
import { fetchData } from "../../xhr/fetchData";
import {
  AuthenticateRequestTO,
  AuthenticateResponseTO,
  SignUpRequestTO,
  SignUpResponseTO,
} from "./types";

const { post } = fetchData();

const register = (credentials: SignUpRequestTO): Promise<SignUpResponseTO> => {
  return post(ENDPOINTS.user.root, credentials);
};

const login = ({
  username,
  password,
}: AuthenticateRequestTO): Promise<AuthenticateResponseTO> => {
  return post(ENDPOINTS.user.login, {
    username,
    password,
  }).then((data) => {
    return data.json();
  });
};

const logout = () => {};

export const authService = {
  register,
  login,
  logout,
};

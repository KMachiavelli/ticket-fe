import { Dispatch } from "react";
import { AnyAction } from "redux";
import { authService } from "../services/userService/auth.service";
import { AuthActionTypes } from "./types";

export const register =
  (username: string, password: string, email: string) =>
  (dispatch: Dispatch<AnyAction>) => {
    console.log("d");

    return authService.register(username, password, email).then(
      (response) => {
        dispatch({
          type: AuthActionTypes.REGISTER_SUCCESS,
        });

        return Promise.resolve();
      },
      (error) => {
        dispatch({ type: AuthActionTypes.REGISTER_FAIL });
        return Promise.reject();
      }
    );
  };

export const login =
  (username: string, password: string) => (dispatch: any) => {
    return authService.login(username, password).then(
      ({ accessToken }) => {
        dispatch({
          type: AuthActionTypes.LOGIN_SUCCESS,
          payload: { user: { accessToken } },
        });
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: AuthActionTypes.LOGIN_FAIL,
        });
        return Promise.reject();
      }
    );
  };

export const logout = () => (dispatch: any) => {
  authService.logout();

  dispatch({
    type: AuthActionTypes.LOGOUT,
  });
};

import { AuthActionTypes } from "../actions/types";
import { getFromLocalStorage } from "../utils/storage/localStorageHelpers";
import { StorageKeys } from "../utils/storage/types";

const user = getFromLocalStorage(StorageKeys.USER);

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default (
  state = initialState,
  action: { payload: any; type: AuthActionTypes }
) => {
  const { type, payload } = action;
  switch (type) {
    case AuthActionTypes.REGISTER_SUCCESS:
    case AuthActionTypes.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case AuthActionTypes.LOGIN_FAIL:
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
  }
};

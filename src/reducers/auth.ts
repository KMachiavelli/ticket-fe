import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthStateI } from "./types";
import { AuthenticateRequestTO } from "../services/userService/types";
import { authService } from "../services/userService/auth.service";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "../utils/storage/localStorageHelpers";
import { StorageKeys } from "../utils/storage/types";

const { accessToken } = getFromLocalStorage(StorageKeys.AUTH);

export const fetchLogIn = createAsyncThunk(
  "auth/fetchLogin",
  (credentials: AuthenticateRequestTO) => {
    return authService.login(credentials);
  }
);

const initialState: AuthStateI = {
  user: null,
  isLoggedIn: !!accessToken,
};

const authReducer = createSlice({
  name: "auth",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchLogIn.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;

      setToLocalStorage(StorageKeys.AUTH, {
        accessToken: action.payload.accessToken,
      });
    });

    builder.addCase(fetchLogIn.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      removeFromLocalStorage(StorageKeys.AUTH);
    });
  },
});

export const {} = authReducer.actions;
export const reducer = authReducer.reducer;

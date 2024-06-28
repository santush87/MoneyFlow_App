// src/store/authSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { getAuthToken, setAuthHeader } from "../helpers/helper";

export type OauthToken = {
  access_token: string | null;
  refresh_token?: string;
};
export interface AuthState {
  token: OauthToken | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: { access_token: getAuthToken() },
  isAuthenticated: !!getAuthToken(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<OauthToken | null>) => {
      const token = action.payload;
      setAuthHeader(token?.access_token || null);
      state.token = token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      setAuthHeader(null);
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth.isAuthenticated;
export default authSlice.reducer;

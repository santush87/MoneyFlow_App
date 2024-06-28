import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { OauthToken } from "./auth-slice";

export type ProfileData = {
  firstName: string;
  lastName: string;
  email: string;
  createdOn: string;
  // categories: Category[];
};

export type TokenAndProfile = {
  token: OauthToken;
  profile: ProfileData
}

const initialState: ProfileData = {
  firstName: "",
  lastName: "",
  email: "",
  createdOn: "",
  // categories: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfile(
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string;
        email: string;
        createdOn: string;
      }>
    ) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.createdOn = action.payload.createdOn;
      // Assuming categories are empty on profile creation
      // state.categories = [];
    },
    updateProfile(
      state,
      action: PayloadAction<{
        firstName?: string;
        lastName?: string;
        email?: string;
        createdOn?: string;
      }>
    ) {
      if (action.payload.firstName) state.firstName = action.payload.firstName;
      if (action.payload.lastName) state.lastName = action.payload.lastName;
      if (action.payload.email) state.email = action.payload.email;
      if (action.payload.createdOn) state.createdOn = action.payload.createdOn;
    },
  },
});

export const { addProfile, updateProfile } = profileSlice.actions;
export default profileSlice.reducer;

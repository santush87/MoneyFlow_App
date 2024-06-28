// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import { expenseSlice } from "./expense-slice";
import { profileSlice } from "./profile-slice";

const store = configureStore({
  reducer: {
    expense: expenseSlice.reducer,
    auth: authReducer,
    profile: profileSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

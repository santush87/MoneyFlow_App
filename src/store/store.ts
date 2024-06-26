// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { expenseSlice } from "./expense-slise";

const store = configureStore({
  reducer: {
    expense: expenseSlice.reducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

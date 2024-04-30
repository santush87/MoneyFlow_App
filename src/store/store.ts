import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense-slise.ts";

export const store = configureStore({
  reducer: {
    expense: expenseSlice.reducer,
  },
});

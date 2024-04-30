import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense-slise.ts";

configureStore({
  reducer: {
    expense: expenseSlice.reducer,
  },
});

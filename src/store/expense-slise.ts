import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type ExpenseItem = {
  id: string;
  name: string;
  amount: number;
  date: Date;
  quantity: number;
};

type ExpenseState = {
  items: ExpenseItem[];
};

const initialState: ExpenseState = {
  items: [],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense(
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        amount: number;
        date: Date;
      }>
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    editExpense() {},
    removeExpense(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity--;
      }
    },
  },
});

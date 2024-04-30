import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type DateAndSum = {
  addedOn: Date;
  amount: number;
};

type ExpenseItem = {
  name: string;
  description: string;
  dateAndSum: DateAndSum[];
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
        name: string;
        description: string;
        addedOn: Date;
        amount: number;
      }>
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].dateAndSum.push({
          addedOn: action.payload.addedOn,
          amount: action.payload.amount,
        });
      } else {
        state.items.push({
          name: action.payload.name,
          description: action.payload.description,
          dateAndSum: [
            {
              addedOn: action.payload.addedOn,
              amount: action.payload.amount,
            },
          ],
        });
      }
    },
    editExpense(
      state,
      action: PayloadAction<{
        name: string;
        description: string;
      }>
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.name === action.payload.name
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].name = action.payload.name;
        state.items[itemIndex].description = action.payload.description;
      }
    },
    removeExpense(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.name === action.payload
      );

      if (itemIndex === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        console.log("No such expense!");
        // state.items[itemIndex].quantity--;
      }
    },
  },
});

export const { addExpense, editExpense, removeExpense } = expenseSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { FoodItem } from 'interfaces/FoodItem';
import { SubmittedOrder } from 'interfaces/SubmittedOrder';

export interface cartState {
  currentItems: FoodItem[];
  submittedOrders: SubmittedOrder[];
}

const initialState: cartState = {
  currentItems: [],
  submittedOrders: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<FoodItem>) => {
      state.currentItems.push(action.payload);
    },

    deleteItemFromCart: (state, action: PayloadAction<string>) => {
      state.currentItems = state.currentItems.filter(
        (foodItem) => foodItem.uuid !== action.payload
      );
    },

    clearCart: (state) => {
      state.currentItems = [];
    },

    addToOrder: (state, action: PayloadAction<SubmittedOrder>) => {
      state.submittedOrders.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteItemFromCart, clearCart, addToOrder } =
  cartSlice.actions;

export default cartSlice.reducer;

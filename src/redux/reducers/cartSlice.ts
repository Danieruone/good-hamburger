import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { FoodItem } from 'interfaces/FoodItem';

export interface cartState {
  currentItems: FoodItem[];
}

const initialState: cartState = {
  currentItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<FoodItem>) => {
      state.currentItems.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

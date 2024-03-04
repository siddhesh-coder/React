import { createSlice } from "@reduxjs/toolkit";

const findIndexOfItem = (arrItem, searchId) => {
  return arrItem.findIndex((item) => item.id === searchId);
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
    totalQty: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingIndex = findIndexOfItem(state.items, action.payload.id);
      if (existingIndex !== -1) {
        state.items[existingIndex] = {
          ...state.items[existingIndex],
          qty: state.items[existingIndex].qty + 1,
        };
      } else {
        state.items.push(action.payload);
      }
      state.totalQty += 1;
    },
    removeItem: (state, action) => {
      const existingIndex = findIndexOfItem(state.items, action.payload);
      if (existingIndex !== -1) {
        const removedQty = state.items[existingIndex].qty;
        state.items.splice(existingIndex, 1);
        state.totalQty -= removedQty;
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.totalQty = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

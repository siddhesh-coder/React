import { createSlice } from "@reduxjs/toolkit";

const storage = {
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error retrieving ${key} from localStorage:`, error);
      return null;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  },
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: storage.get("cartItems") || [],
    totalQty: storage.get("TotalQty") || 0,
    totalPrice: storage.get("TotalPrice") || 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { id, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.qty++;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
      state.totalQty++;
      state.totalPrice += parseFloat(price);
      storage.set("cartItems", state.items);
      storage.set("TotalQty", state.totalQty);
      storage.set("TotalPrice", state.totalPrice);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        const removedItem = state.items[index];
        state.items.splice(index, 1);
        state.totalQty -= removedItem.qty;
        state.totalPrice -= removedItem.qty * parseFloat(removedItem.price);
        storage.set("cartItems", state.items);
        storage.set("TotalQty", state.totalQty);
        storage.set("TotalPrice", state.totalPrice);
      }
    },
    incrementItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items[index].qty++;
        state.totalQty++;
        state.totalPrice += parseFloat(state.items[index].price);
        storage.set("cartItems", state.items);
        storage.set("TotalQty", state.totalQty);
        storage.set("TotalPrice", state.totalPrice);
      }
    },
    decrementItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1 && state.items[index].qty > 1) {
        state.items[index].qty--;
        state.totalQty--;
        state.totalPrice -= parseFloat(state.items[index].price);
        storage.set("cartItems", state.items);
        storage.set("TotalQty", state.totalQty);
        storage.set("TotalPrice", state.totalPrice);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQty = 0;
      state.totalPrice = 0;
      storage.set("cartItems", []);
      storage.set("TotalQty", 0);
      storage.set("TotalPrice", 0);
    },
  },
});

export const { addItem, removeItem, clearCart, incrementItem, decrementItem } =
  cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const findIndexOfItem = (arrItem, searchId) => {
  return arrItem.findIndex((item) => item.id === searchId);
};

const setValues = (dataName, data) => {
  localStorage.setItem(`${dataName}`, JSON.stringify(data));
};

const finalPrice = (items) => {
  return items.reduce((acc, next) => {
    return acc + parseFloat(next.price);
  }, 0);
};

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalQtyNum =
  localStorage.getItem("TotalQty") !== null
    ? JSON.parse(localStorage.getItem("TotalQty"))
    : 0;

const totalPriceNum =
  localStorage.getItem("TotalPrice") !== null
    ? JSON.parse(localStorage.getItem("TotalPrice"))
    : 0;

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: items,
    totalQty: totalQtyNum,
    totalPrice: totalPriceNum,
  },
  reducers: {
    addItem: (state, action) => {
      const existingIndex = findIndexOfItem(state.items, action.payload.id);
      if (existingIndex !== -1) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
      state.totalQty += 1;
      state.totalPrice += parseInt(action.payload.price);
      try {
        setValues("cartItems", state.items);
        setValues("TotalQty", state.totalQty);
        setValues("TotalPrice", state.totalPrice);
      } catch (error) {
        console.error("Error saving auth status to localStorage:", error);
      }
    },
    removeItem: (state, action) => {
      const existingIndex = findIndexOfItem(state.items, action.payload.id);
      if (existingIndex !== -1) {
        const removedQty = state.items[existingIndex].qty;
        const itemPrice = state.items[existingIndex].price;
        state.items.splice(existingIndex, 1);
        state.totalQty -= removedQty;
        state.totalPrice -= parseInt(itemPrice);
      }
      try {
        setValues("cartItems", state.items);
        setValues("TotalQty", state.totalQty);
        setValues("TotalPrice", state.totalPrice);
      } catch (error) {
        console.error("Error saving auth status to localStorage:", error);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQty = 0;
      state.totalPrice = 0;
      try {
        setValues("cartItems", []);
        setValues("TotalQty", 0);
        setValues("TotalPrice", 0);
      } catch (error) {
        console.error("Error saving auth status to localStorage:", error);
      }
    },
    incrementItem: (state, action) => {
      const existingIndex = findIndexOfItem(state.items, action.payload.id);
      if (existingIndex !== -1) {
        const item = state.items[existingIndex];
        if (!item.originalPrice) {
          item.originalPrice = item.price;
        }
        if (item.qty >= 1) {
          const updatedQty = item.qty + 1;
          const updatedPrice = (
            updatedQty * parseFloat(item.originalPrice)
          ).toString();
          const updatedItem = {
            ...item,
            qty: updatedQty,
            price: updatedPrice,
          };
          state.items.splice(existingIndex, 1, updatedItem);

          state.totalPrice = finalPrice(state.items);

          try {
            setValues("cartItems", state.items);
            setValues("TotalPrice", state.totalPrice);
          } catch (error) {
            console.error("Error saving data to localStorage:", error);
          }
        }
      }
    },
    decrementItem: (state, action) => {
      const existingIndex = findIndexOfItem(state.items, action.payload.id);
      if (existingIndex !== -1) {
        const item = state.items[existingIndex];
        if (item.qty > 1) {
          const updatedItem = {
            ...item,
            qty: item.qty - 1,
            price: ((item.qty - 1) * parseFloat(item.originalPrice)).toString(),
          };
          state.items.splice(existingIndex, 1, updatedItem);

          state.totalPrice = finalPrice(state.items);

          try {
            setValues("cartItems", state.items);
            setValues("TotalPrice", state.totalPrice);
          } catch (error) {
            console.error("Error saving auth status to localStorage:", error);
          }
        }
      }
    },
  },
});

export const { addItem, removeItem, clearCart, incrementItem, decrementItem } =
  cartSlice.actions;

export default cartSlice.reducer;

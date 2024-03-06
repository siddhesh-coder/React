import { createSlice } from "@reduxjs/toolkit";

const toggleCartSlice = createSlice({
  name: "toggleCartSlice",
  initialState: {
    open: false,
  },
  reducers: {
    handleOpenCart: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { handleOpenCart } = toggleCartSlice.actions;

export default toggleCartSlice.reducer;

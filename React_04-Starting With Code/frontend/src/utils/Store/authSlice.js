import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    logout: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

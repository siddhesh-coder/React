import { createSlice } from "@reduxjs/toolkit";

const authStatus = localStorage.getItem("userAuthStatus");
const initialAuthStatus = authStatus ? JSON.parse(authStatus) : false;

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isAuthenticated: initialAuthStatus,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = action.payload;
      try {
        localStorage.setItem(
          "userAuthStatus",
          JSON.stringify(state.isAuthenticated)
        );
      } catch (error) {
        console.error("Error saving auth status to localStorage:", error);
      }
    },
    logout: (state, action) => {
      state.isAuthenticated = action.payload;
      try {
        localStorage.setItem("userAuthStatus", JSON.stringify(state.isAuthenticated));
      } catch (error) {
        console.error("Error saving auth status to localStorage:", error);
      }
    },
  },
});


export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

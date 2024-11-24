import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "../thunks/authThunk";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
  },
  extraReducers: (builder) => {
    builder
      // Sign In
      .addCase(signIn.fulfilled, (state, action) => {
        state.currentUser = action.payload.userInfo;
        localStorage.setItem("token", action.payload.token);
      })
      // User Logout
      .addCase(userLogout, (state) => {
        state.currentUser = {};
        localStorage.removeItem("token");
      });
  },
});

export default userSlice.reducer;

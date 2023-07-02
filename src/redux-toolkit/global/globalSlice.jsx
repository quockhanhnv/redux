import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state, action) => {
      console.log(action);
      return { ...state, darkMode: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = globalSlice.actions;
export default globalSlice.reducer;

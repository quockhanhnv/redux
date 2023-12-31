import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => ({ ...state, count: state.count + 1 }),
    decrement: (state) => ({ ...state, count: state.count - 1 }),
    incrementByValue: (state, action) => {
      return { ...state, count: state.count + action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;

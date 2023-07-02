import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";

// sau này app sẽ có rất nhiều reducer
export const reducer = combineReducers({
  counter: counterSlice, // key: value
});

const store = configureStore({
  reducer, //reducer: reducer
});

export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import globalSlice from "./global/globalSlice";

// sau này app sẽ có rất nhiều reducer
export const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
  // key: value
});

const store = configureStore({
  reducer, //reducer: reducer
});

export default store;

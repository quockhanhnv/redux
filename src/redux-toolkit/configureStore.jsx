import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import globalSlice from "./global/globalSlice";
import logger from "redux-logger";

// sau này app sẽ có rất nhiều reducer
export const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
  // key: value
});

/* 
  My Middleware to log state of store
  Running when dispatching an action
*/
const myLoggerMiddleware = (store) => (next) => (action) => {
  // your code here
  console.log("myLoggerMiddleware is running....");
  console.log("action", action);

  next(action); // run to next action
};

/*    ******** Equivalent ********
  const loggerMiddleware1 = function (store) {
    return function (next) {
      return function (action) {
        // your code here
      };
    };
  };
*/
const store = configureStore({
  reducer, //reducer: reducer
  middleware: (gDM) => gDM().concat(logger, myLoggerMiddleware),
});

// Redux middleware
store.subscribe(() => {
  // javascript observer pattern

  console.log(`current state: ${store.getState().counter.count}`);
});

export default store;

import { createStore, combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";

// sau này app sẽ có rất nhiều reducer
const reducer = combineReducers({
  counter: counterReducer, // key: value
});

const store = createStore(reducer);

export default store;

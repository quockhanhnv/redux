import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import createSagaMiddleware from "@redux-saga/core";
import { reducer } from "./reducers";
// import rootSaga from "./rootSaga";

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(logger, sagaMiddleware),
    getDefaultMiddleware().concat(logger),
});

// sagaMiddleware.run(rootSaga);

export default store;

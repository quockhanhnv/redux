import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
// import storeRedux from "./components/redux/configureStore.jsx";
import storeReduxToolkit from "./redux-toolkit/configureStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={storeReduxToolkit}>
      <App />
    </Provider>
  </React.StrictMode>
);

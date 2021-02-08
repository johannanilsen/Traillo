import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./css/index.css";
import "./css/login.css";
import App from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

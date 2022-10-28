import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from '../src/Redux/Store/index'
import axios from 'axios'
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL= process.env.REACT_APP_API || "http://localhost:3000/"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
            <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')

);



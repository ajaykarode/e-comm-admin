import React from "react";
// import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
);

// ReactDOM.render(
//   <Provider store={ store }>

//   <React.StrictMode>
//     <App />
//   </React.StrictMode>

//   </Provider>,
//   document.getElementById('root')

// );

serviceWorker.unregister();
// unregister();

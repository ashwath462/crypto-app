import React from "react";
// import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app";
import "antd/dist/reset.css";
import { createRoot } from "react-dom/client";
import store from "./app/store";
// import '@babel/plugin-proposal-private-property-in-object';
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Router>
    <Provider store={store}>
      <App tab="home" />
    </Provider>
  </Router>
);
// ReactDOM.render(<Router>
//     <App/>
// </Router>,document.getElementById('root'));

import './styles/main.scss';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter >
  </React.StrictMode>
);
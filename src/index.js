import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import './App.scss'
import ScrollToTop from "./ScrollToTop";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.Fragment>
        <HashRouter >
            <ScrollToTop />
            <App />
        </HashRouter>
    </React.Fragment>
);


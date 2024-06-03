import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.scss";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// components
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

const rootNode = document.getElementById("root");
serviceWorkerRegistration.register();

ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <App />
            {/* <Footer /> */}
        </BrowserRouter>
    </React.StrictMode>
);

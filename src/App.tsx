import { Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import React from "react";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Notfound />} />
        </Routes>
    );
}

export default App;

import React from "react";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";


function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cuisine" element={<Cuisine />}/>
    </Routes>
  );
}

export default Pages;

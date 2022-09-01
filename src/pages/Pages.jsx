import React from "react";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import DietaryOption from "./DietaryOption";

import Home from "./Home";


function Pages() {
  return (
    <Routes>
        <Route path="/diet" element={<DietaryOption />}/>
        <Route path="/" element={<Home />}/>
    </Routes>
  );
}

export default Pages;

import React from "react";
import { Route, Routes } from "react-router-dom";
import DietaryOption from "./DietaryOption";

import Home from "./Home";
import SearchResult from "./SearchResult";

function Pages() {
  return (
    <Routes>
      <Route path="/diet/:options" element={<DietaryOption />} />
      <Route path="/" element={<Home />} />
      <Route path="/searchresult/:search" element={<SearchResult />} />
    </Routes>
  );
}

export default Pages;

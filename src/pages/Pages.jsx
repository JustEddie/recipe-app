import React from "react";
import { Route, Routes } from "react-router-dom";
import DietaryOption from "./DietaryOption";

import Home from "./Home";
import Recipe from "./Recipe";
import SearchResult from "./SearchResult";

function Pages() {
  return (
    <Routes>
      <Route path="/diet/:options" element={<DietaryOption />} />
      <Route path="/" element={<Home />} />
      <Route path="/searchresult/:search" element={<SearchResult />} />
      <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;

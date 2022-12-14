import React from "react";
import { Route, Routes } from "react-router-dom";
import DietaryOption from "./DietaryOption";

import Home from "./Home";
import Recipe from "./Recipe";
import SearchResult from "./SearchResult";
import SubscriptionForm from "./SubscriptionForm";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searchresult/:search" element={<SearchResult />} />
      <Route path="/diet/:options" element={<DietaryOption />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/subscription/" element={<SubscriptionForm />} />
    </Routes>
  );
}

export default Pages;

import React from "react";
import Options from "../components/Options";
import Popular from "../components/Popular";
import Search from "../components/Search";
import Veggie from "../components/Veggie";

function Home() {
  return (
    <div>
      <Search />
      <Popular />
      <Veggie />
    </div>
  );
}

export default Home;

import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { List, OptionButton } from "../components/Template";

function Options() {
  return (
    <List>
      <NavLink to={"/diet/gluten"}>
        <OptionButton>Gluten Free</OptionButton>
      </NavLink>
      <NavLink to={"/diet/dairy"}>
        <OptionButton>Dairy Free</OptionButton>
      </NavLink>
      <NavLink to={"/diet/peanut"}>
        <OptionButton>Peanut Free</OptionButton>
      </NavLink>
    </List>
  );
}

export default Options;

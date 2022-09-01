import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { List } from "../components/Template";

function Options() {
  return (
    <List>
      <NavLink to={"/diet/vegan"}>
        <p>Vegan</p>
      </NavLink>
      <NavLink to={"/diet/gluten"}>
        <p>Gluten Free</p>
      </NavLink>
      <NavLink to={"/diet/dairy"}>
        <p>Dairy Free</p>
      </NavLink>
      <NavLink to={"/diet/peanut"}>
        <p>Peanut Free</p>
      </NavLink>
    </List>
  );
}

export default Options;

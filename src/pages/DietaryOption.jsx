import React from "react";
import {  NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { List } from "../components/Template";

function DietaryOption() {
  // const [diet,setDiet] = useState([]);

  // const findDiet = async () => {
  //     const api = await fetch(
  //     `https://api.spoonacular.com/recipes/random?apiKey=1a520533dda447eca16309cf5f2f3b6f&number=12&${diet}`
  //     );
  //     const data = await api.json();
  //     setDiet(data.recipes);

  //     useEffect(()=> {
  //         console.log(params.option);
  //     },[params.option])
  return (
    <List>
      <NavLink to={"/diet/vegan"}>
        <p>Vegan</p>
      </NavLink>
      <NavLink to={"/diet/vegetarian"}>
        <p>Vegetarian</p>
      </NavLink>
      <NavLink to={"/diet/gf"}>
        <p>Gluten Free</p>
      </NavLink>
      <NavLink to={"/diet/df"}>
        <p>Dairy Free</p>
      </NavLink>
      <NavLink to={"/diet/healthy"}>
        <p>Healthy</p>
      </NavLink>
    </List>
  );
}

export default DietaryOption;

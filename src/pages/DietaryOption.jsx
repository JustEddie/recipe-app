import React from 'react'
import { useState, useEffect } from 'react';


function DietaryOption() {
    const [diet,setDiet] = useState([]);

    const findDiet = async () => {
        const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=1a520533dda447eca16309cf5f2f3b6f&number=12&${diet}`
        );
        const data = await api.json();
        setDiet(data.recipes);
  return (
    <div>DietaryOption</div>
  )
}}

export default DietaryOption;
import React from 'react'
import { useState, useEffect } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css";
import {Wrapper, Card} from "./Template"

function Veggie() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
      getVeggie();
    }, [])
    
    const getVeggie = async () => {
        const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=1a520533dda447eca16309cf5f2f3b6f&number=12&tags=vegetarian`
        );
        const data = await api.json();
        setPopular(data.recipes);
    }    
  return (
    <div>
      <Wrapper>
        <h1>Veggie Picks</h1>
        <Splide
          options={{
            perPage: 4
          }}
        >
            {popular.map((recipe)=>{
                return (
                  <SplideSlide key={recipe.id}>
                    <Card>
                      <img src={recipe.image} alt={recipe.title} />
                      <p>{recipe.title}</p>
                    </Card>
                  </SplideSlide>
                )
            })}
        </Splide>
        </Wrapper>
    </div>
  )
}



export default Veggie
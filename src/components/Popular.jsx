import React from 'react'
import { useState, useEffect } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css";
import {Wrapper, Card} from "./Template"

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
      getPopular();
    }, [])
    
    const getPopular = async () => {
        const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=1a520533dda447eca16309cf5f2f3b6f&number=12`
        );
        const data = await api.json();
        setPopular(data.recipes);
    }    
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4
          }}
        >
            {popular.map((recipe)=>{
                return (
                  <SplideSlide key={recipe.id}>
                    <Card>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                    </Card>
                  </SplideSlide>
                )
            })}
        </Splide>
        </Wrapper>
    </div>
  )
}



export default Popular
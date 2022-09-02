import React from 'react'
import { useState, useEffect } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css";
import {Wrapper, Card} from "./Template"

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
      getVeggie();
    }, [])
    
    const getVeggie = async () => {
      const check = localStorage.getItem('veggie');

      if(check){
        setVeggie(JSON.parse(check));
      }else{
        const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=ae53036104e44e8aa4be53ed54cc53ad&number=12&tags=vegetarian`
        );
        const data = await api.json();
        localStorage.setItem('veggie', JSON.stringify(data.recipes));
        setVeggie(data.recipes);
    }    };
  return (
    <div>
      <Wrapper>
        <h1>Vegetarian</h1>
        <Splide
          options={{
            perPage: 4
          }}
        >
            {veggie.map((recipe)=>{
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
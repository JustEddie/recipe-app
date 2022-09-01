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

      const check = localStorage.getItem('popular');

      if(check){
        setPopular(JSON.parse(check));
      }else{
        const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=388aba4291784a01b499a73dd6d7f336&number=12`
        );
        const data = await api.json();
        localStorage.setItem('popular', JSON.stringify(data.recipes));
        setPopular(data.recipes);
        console.log(data);
    }  };  
  return (
    <div>
      <Wrapper>
        <h1>Popular Picks</h1>
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



export default Popular
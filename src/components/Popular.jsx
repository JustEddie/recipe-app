import React from 'react'
import { useState, useEffect } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css";
import {Wrapper, Card} from "./Template"
import {useNavigate} from "react-router-dom"

function Popular() {
    const [popular, setPopular] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      getPopular();
    }, [])
    
    const getPopular = async () => {

      const check = localStorage.getItem('popular');

      if(check){
        setPopular(JSON.parse(check));
      }else{
        const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=52850cdf3fc941fd89b0ac10e71ba2ad&number=12`
        );
        const data = await api.json();
        localStorage.setItem('popular', JSON.stringify(data.recipes));
        setPopular(data.recipes);
        console.log(data);
    }  };  
  return (
    <div>
      <Wrapper>
        <h1>Popular</h1>
        <Splide
          options={{
            perPage: 4
          }}
        >
            {popular.map((recipe)=>{
                return (
                  <SplideSlide onClick={ () =>navigate("/recipe/"+ recipe.id)}  key={recipe.id}>
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
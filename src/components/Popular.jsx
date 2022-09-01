import React from 'react'
import { useState, useEffect } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css";
import styled from "styled-components";

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
      getPopular();
    }, [])
    
    const getPopular = async () => {
        const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=1a520533dda447eca16309cf5f2f3b6f&number=9`
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

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  margin : 4rem 0rem;
`;

const Card = styled.div`
  height: 10 rem;
  width:5 rem;
`

export default Popular
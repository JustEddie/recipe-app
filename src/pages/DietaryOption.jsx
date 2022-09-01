import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Wrapper, Card, DietCard, Grid } from "../components/Template";

function DietaryOption() {
  const [diet, setDiet] = useState([]);
  let params = useParams();

  const getDiet = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=388aba4291784a01b499a73dd6d7f336&number=12&intolerances=${name}`
    );
    const data = await api.json();
    setDiet(data.results);
  };
  useEffect(() => {
    getDiet(params.options);
  }, [params.options]);

  return (
    <div>
      <Wrapper>
        <h1>{params.options} Free</h1>
        <Grid>
          {diet.map((recipe) => {
            return (
              <DietCard key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} />
                <p>{recipe.title}</p>
              </DietCard>
            );
          })}
        </Grid>
      </Wrapper>
    </div>
  );
}

export default DietaryOption;

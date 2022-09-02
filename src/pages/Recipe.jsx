import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Search from "../components/Search";
import {
  Wrapper,
  Card,
  Grid,
  Details,
  DetailRecipe,
} from "../components/Template";

function Recipe() {
  const [recipe, setRecipe] = useState([]);
  let params = useParams();

  /**GET https://api.spoonacular.com/recipes/{id}/information
   */
  const getRecipe = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=52850cdf3fc941fd89b0ac10e71ba2ad`
    );
    const data = await api.json();
    setRecipe(data);
    console.log(params.id);
  };

  useEffect(() => {
    getRecipe();
  }, [params.id]);

  return (
    <div>
      <Search />
      <Wrapper>
        <Details>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} />
          <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
        </Details>
        <DetailRecipe>
          {/* <ul>
            {recipe.extendedIngredients.map((ingredient) => {
             return <li key={ingredient.id}>{ingredient.original}</li>
            })}
          </ul> */}
          <a href={recipe.sourceUrl}>See the recipe</a>
        </DetailRecipe>
      </Wrapper>
    </div>
  );
}

export default Recipe;

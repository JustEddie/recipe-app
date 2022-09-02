import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Search from '../components/Search';
import { Wrapper, Card, Grid } from "../components/Template";

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
      setRecipe(data.results);
      console.log(params.id);
    };

    useEffect(() => {
        getRecipe();
      }, [params.id]);

  return (
    <div>
      <Search />
      <Wrapper>
        <h1>{recipe.title}</h1>
        <Grid>
            <p>dd</p>
        </Grid>
      </Wrapper>
    </div>
  )
}

export default Recipe
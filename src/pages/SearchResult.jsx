import React from 'react'
import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Search from '../components/Search';
import { Wrapper, Card, Grid } from "../components/Template";

function SearchResult() {
    const [search, setSearch] = useState([]);
    let params = useParams();
    const navigate = useNavigate();

  
    const getSearch = async (id) => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=52850cdf3fc941fd89b0ac10e71ba2ad&number=12&query=${id}`
      );
      const data = await api.json();
      setSearch(data.results);
    };

    useEffect(() => {
        getSearch(params.search);
      }, [params.search]);

      const navigateToRecipe = (key) =>{
        navigate("/recipe/" + key );
      }

  return (
    <div>
      <Search />
      <Wrapper>
        <h1>{params.search}</h1>
        <Grid>
          {search.map((recipe) => {
            return (
              <Card onClick={ () =>navigate("/recipe/"+ recipe.id)} value={recipe.id} key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} />
                <p>{recipe.title}</p>
              </Card>
            );
          })}
        </Grid>
      </Wrapper>
    </div>
  )
}

export default SearchResult
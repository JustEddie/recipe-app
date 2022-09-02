import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function SearchResult(searchInput) {
    const [search, setSearch] = useState([]);
    let params = useParams();

  
    const getSearch = async (input) => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=52850cdf3fc941fd89b0ac10e71ba2ad&number=12&query=${input}`
      );
      const data = await api.json();
      setSearch(data.results);
      console.log(search);
      console.log(input);
    };

    // useEffect(() => {
    //     getSearch(params.options);
    //   }, [params.search]);
    useEffect(() => {
      getSearch(searchInput);
      console.log(searchInput);
    }, [params.search]);
  return (
    <div>SearchResult</div>
  )
}

export default SearchResult
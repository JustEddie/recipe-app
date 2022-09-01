import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function DietaryOption() {
  const [diet, setDiet] = useState([]);
  let params = useParams();



  const getDiet = async (name) => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=388aba4291784a01b499a73dd6d7f336&number=12&intolerances=${name}`
      );
      const data = await api.json();
      setDiet(data.results);
      console.log(api)
      console.log(data.results);
    }
    useEffect(() => {
        getDiet(params.options);
        console.log(params.options)
      }, [params.options]);


  return <div>dd</div>;
}

export default DietaryOption;

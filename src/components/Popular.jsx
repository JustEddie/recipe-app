import React from 'react'
import { useState } from 'react'

function Popular() {
    const [poplular, setPopular] = useState([]);

    useEffect(() => {
      getPopular();
    }, [])
    
    const getPopular = async () => {
        const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=1a520533dda447eca16309cf5f2f3b6f&number=9`
        );
        const data = await api.json();

    }    
  return (
    <div>Popular</div>
  )
}

export default Popular
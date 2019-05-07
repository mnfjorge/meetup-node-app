import React, { useEffect, useState } from 'react'
import RecipeCard from './recipe-card';
import client from '../../http';

const Recipes = () => {
  const [recipes, setRecipes] = useState([])

  function fetchData() {
    client.get('/recipes')
      .then(response => {
        setRecipes(response.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {recipes.map(recipe => (
        <RecipeCard
          recipe={recipe}
          key={recipe.id}
        />
      ))}
    </>
  )
}

export default Recipes
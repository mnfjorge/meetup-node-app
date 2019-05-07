import React, { useEffect, useState } from 'react'
import RecipeCard from './recipe-card';
import clientRecipes from '../../http/recipes';

const Recipes = () => {
  const [recipes, setRecipes] = useState([])

  function fetchData() {
    clientRecipes.list()
      .then(list => {
        setRecipes(list)
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
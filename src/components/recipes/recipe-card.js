import React from 'react'

const RecipeCard = ({ recipe }) => {
  return (
    <article>
      <h1>{recipe.title}</h1>
      <p>
        {recipe.description}
      </p>
      <div>
        <ul>
          {recipe.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default RecipeCard
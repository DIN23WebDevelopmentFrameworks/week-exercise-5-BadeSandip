import React from "react";
import Recipe from "./Recipe.tsx";

interface IRecipeListProps {
  recipes: any[];
}

const RecipeList: React.FC<IRecipeListProps> = ({ recipes }) => {
  return (
    <div>
      <h2>Recipes</h2>
      <div>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipeData={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;

import React from "react";

interface IRecipeProps {
  recipeData: {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
  };
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>{recipeData.name}</h3>
      <h4>Ingredients</h4>
      <ul>
        {recipeData.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Instructions</h4>
      <ol>
        {recipeData.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;

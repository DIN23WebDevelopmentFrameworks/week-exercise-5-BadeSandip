import React, { useState, useEffect } from "react";
import RecipeTagList from "./RecipeTagList.tsx";
import RecipeList from "./RecipeList.tsx";

const App = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    // it will Fetch recipe tags from the API
    const fetchTags = async () => {
      const response = await fetch("https://dummyjson.com/recipes/tags");
      const data = await response.json();
      setTags(data);
    };
    fetchTags();
  }, []);

  useEffect(() => {
    if (selectedTag) {
      // this will Fetch recipes for the selected tag
      const fetchRecipes = async () => {
        const response = await fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`);
        const data = await response.json();
        setRecipes(data.recipes);
      };
      fetchRecipes();
    }
  }, [selectedTag]);

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {selectedTag ? (
        <div>
          <button onClick={() => setSelectedTag(null)}>Back</button>
          <RecipeList recipes={recipes} />
        </div>
      ) : (
        <RecipeTagList tagList={tags} onSelectTag={setSelectedTag} />
      )}
    </div>
  );
};

export default App;


import React from "react";
import './components_css/recipe.css'
const Recipes = ({ recipes }) => {
  return (
    <div className="container">
      <p>{recipes}</p>
    </div>
  );
};

export default Recipes;

import React from "react";

const Ingredient = ({ meal }) => {
  return (
    <div className="ingredient_container">
      <p>
        {meal.strIngredient1} ---- {meal.strMeasure1}
      </p>
      <p>
        {meal.strIngredient2} ---- {meal.strMeasure2}
      </p>
      <p>
        {meal.strIngredient3} ---- {meal.strMeasure3}
      </p>
      <p>
        {meal.strIngredient4} ---- {meal.strMeasure4}
      </p>
      <p>
        {meal.strIngredient5} ---- {meal.strMeasure5}
      </p>
      <p>
        {meal.strIngredient6} ---- {meal.strMeasure6}
      </p>
       <p>
        {meal.strIngredient7} ---- {meal.strMeasure7}
      </p>
      <p>
        {meal.strIngredient8} ---- {meal.strMeasure8}
      </p>
       <p>
        {meal.strIngredient9} ---- {meal.strMeasure9}
      </p>
    </div>
  );
};

export default Ingredient;

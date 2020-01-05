import React from "react";

const Ingredient = ({ meal }) => {
  return (
    <div style={container}>
      <p>
        {meal.strIngredient1}--{meal.strMeasure1}
      </p>
      <p>
        {meal.strIngredient2}--{meal.strMeasure2}
      </p>
      <p>
        {meal.strIngredient3}--{meal.strMeasure3}
      </p>
      <p>
        {meal.strIngredient4}--{meal.strMeasure4}
      </p>
      <p>
        {meal.strIngredient5}--{meal.strMeasure5}
      </p>
      <p>
        {meal.strIngredient6}--{meal.strMeasure6}
      </p>
    </div>
  );
};
const container = {
  alignText: "left",
  padding: "20px",
  backgroundColor: "#ee82ee",
  height: "250px",
  overflow: "scroll",
  marginRight: "20px",
  lineHeight: "2em"
};
export default Ingredient;

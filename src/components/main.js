import React from "react";
import Header from "./header";
import Catagory from "./catagory";
import Ingredient from "./ingredient";
import Recipes from "./recipes";
// import Ingredient from './Ingredient'
// import Title from './Title'
const Main = ({ meals }) => {
  // console.log(meals);
  return meals.length ? (
    meals.map(meal => {
      return (
        <div key={meal.idMeal}
          style={{ backgroundColor: "#b4b4b4", width: "97%", margin: "auto" }}
        >
          <Header header={meal.strMeal} />
          <div  style={container} >
            {/* <Title title={meal}/> */}
            <div style={img}>
              <img alt="not found" src={meal.strMealThumb} style={getImg} />
            </div>
            <div style={content}>
              <Catagory catagory={meal.strCategory} area={meal.strArea} />
              {/* <p>{meal.strInstructions}</p> */}
              <span>Ingredients</span>
              <Ingredient meal={meal} />
              <div style={recipes}>
                <span>Recipes</span>
                <Recipes recipes={meal.strInstructions} />
              </div>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <p style={Message} className="center">
      Type a Dish Name to Search for its Ingredients
    </p>
  );
};
const container = {
  display: "flex"
};
const img = {
  flex: "3"
};
const content = {
  flex: "5"
};
const getImg = {
  height: "350px",
  width: "350px",
  marginLeft: "50px",
  marginTop: "60px"
};
const Message = {
  textAlign: "center"
};
const recipes = {
  textAlign: "center",
  marginTop: "20px"
};
export default Main;

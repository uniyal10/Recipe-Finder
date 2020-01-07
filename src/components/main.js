import React from "react";
import Header from "./header";
import Catagory from "./catagory";
import Ingredient from "./ingredient";
import Recipes from "./recipes";
import Image from "./image"
import './components.css'

const Main = ({ meals }) => {
  return meals!==null ? (
    meals.map(meal => {
      return (
        <div key={meal.idMeal} id="main_container">

              <Header header={meal.strMeal}/>

                <div className="recipe_container">

                           <div className="recipe_image">
                              <Image image={meal.strMealThumb}/>
                           </div>
 
                          <div className="recipe_content">
                               <Catagory catagory={meal.strCategory} area={meal.strArea} />  
                               <span>ingredients</span>
                               <Ingredient meal={meal} />
                               <Recipes recipes={meal.strInstructions} />
                          </div> 

               </div>
        </div>
      );
    })
  ) : 
  (
    <div>
      <h3>no data found</h3>
    </div>
  );
};

export default Main;

import React from "react";
import Header from "./header";
import Catagory from "./catagory";
import Ingredient from "./ingredient";
import Recipes from "./recipes";
import Image from "./image"
import './components_css/components.css'

const Main = ({ meals }) => {
if(meals===null){
  return(
     <div style={{textAlign:"center"}}>
      <h3>No Data has been received</h3>
    </div>
    )
}
else if(meals.length===0){
  return(
     <div style={{textAlign:"center"}}>
      <h3>Type a Dish Name to Search for its Ingredients</h3>
    </div>
    )
}
else{
  return  (
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
                               <div id="recipe_title">Recipes</div>
                               <Recipes recipes={meal.strInstructions} />
                          </div> 

               </div>
        </div>
      );
    })
  ) 
}
};


export default Main;

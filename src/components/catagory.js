import React from "react";

const Catagory = ({ catagory, area }) => {
  return (
    <div style={container}>
      <p>Category of Meal-{catagory}</p>
      <p>Area of the Meal-{area}</p>
    </div>
  );
};
const container = {
  marginTop: "20px",
  marginBottom: "20px"
};
export default Catagory;

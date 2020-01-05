import React from "react";

const Recipes = ({ recipes }) => {
  return (
    <div style={container}>
      <p>{recipes}</p>
    </div>
  );
};
const container = {
  textAlign: "center",
  marginTop: "20px",
  marginRight: "10px",
  marginBottom: "5px",
  backgroundColor: "#ee82ee"
};
export default Recipes;

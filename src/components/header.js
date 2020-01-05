import React from "react";

const Header = ({ header }) => {
  return (
    <div style={container}>
      <h1>{header}</h1><i className="far fa-heart"></i>
    </div>
  );
};
const container = {
  backgroundColor: "white",
  textAlign: "center"
};
export default Header;

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Header = ({ header }) => {
  return (
  	<div className="header">
              <h1 className="header_heading">{header}</h1>
              <FontAwesomeIcon icon={faCoffee} className="header_icon" />
    </div>
  );
};



export default Header;

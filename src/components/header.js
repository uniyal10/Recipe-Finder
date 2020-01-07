import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Header = ({ header }) => {
  return (
  	<div className="header">
              <h1 className="header_heading">{header}</h1>
              <FontAwesomeIcon icon={faHeart} className="header_icon" onClick={e=>console.log(e.target.currentColor)}/>
    </div>
  );
};



export default Header;

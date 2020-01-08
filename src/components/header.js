import React,{Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
class Header extends Component{
    handleClick=(e)=>{
    	console.log(e.target.name);
    }
	render(){
  return (
  	<div className="header">
              <h1 className="header_heading">{this.props.header}</h1>
              <FontAwesomeIcon icon={faHeart} className="header_icon_none"  onClick={this.handleClick}/>
    </div>
  );
}
}



export default Header;

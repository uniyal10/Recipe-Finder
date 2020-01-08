import React,{Component} from "react";
import './components_css/header.css'
class Header extends Component{
    handleClick=(e)=>{
        if(e.target.id==='header_icon_none'){
          e.target.id='header_icon_red'
        }
        else{
          e.target.id='header_icon_none'
        }
    }
	render(){
  return (
  	<div className="header">
              <h1 className="header_heading">{this.props.header}</h1>
                  <div id="header_icon_none" className="fa fa-heart-o" onClick={this.handleClick}></div>

    </div>
  );
}
}



export default Header;

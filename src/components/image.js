import React from 'react'

const Image=({image})=>{
	return(
            <div >
              <img src={image} alt="image not found" id="image"/>
            </div>
             
		);
}
export default Image;
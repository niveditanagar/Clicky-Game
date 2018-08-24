import React from "react"
import "./container.css";

const Container = props => (
  <div 
  className="niviCard" 
  value={props.id} 
  onClick={this.handleClick}
  >
    <div className="img-container" >
      <img alt={props.name} src={props.image}  />
    </div>
    <div className="content">
    </div>
   
  </div>
);

  


export default Container;

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    return(
      <div className="wholeDiddlyDangShebang" style={{color:"pink", backgroundColor: "lavender", fontSize: "20px", textAlign:"center", height: 1000}}>
          <NavLink to="/home" style={{color:"pink", textDecoration:"none"}}>HOME </NavLink>
          <NavLink to="/about" style={{color:"pink", textDecoration:"none"}}>ABOUT </NavLink>
          <NavLink to="/portfolio" style={{color:"pink", textDecoration:"none"}}>PORTFOLIO </NavLink>

          {this.props.children}

      </div>
    )
  }
}

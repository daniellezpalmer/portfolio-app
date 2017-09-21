import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    return(
      <div style={{backgroundColor:"#4a5571", fontSize:"20px", height:"100%", width:"100%", position:"absolute", color:"#35b729", padding:"50px 0px 0px 0px"}}>
<div style={{textAlign:"center"}}>
        <NavLink to="/" activeClassname="selected" activeStyle={{color:"white", textAlign:"center"}} style={{color:"#35b729", textDecoration:"none", textAlign:"center"}}>SPLASH PAGE | </NavLink>

          <NavLink to="/home" activeClassname="selected" activeStyle={{color:"white", textAlign:"center"}} style={{color:"#35b729", textDecoration:"none", textAlign:"center"}}>HOME | </NavLink>

          <NavLink to="/about" activeClassname="selected" activeStyle={{color:"white", textAlign:"center"}} style={{color:"#35b729", textDecoration:"none", textAlign:"center"}}>ABOUT | </NavLink>

          <NavLink to="/portfolio" activeClassname="selected" activeStyle={{color:"white", textAlign:"center"}} style={{color:"#35b729", textDecoration:"none", textAlign:"center"}}>PORTFOLIO | </NavLink>

          <NavLink to="/contacts" activeClassname="selected" activeStyle={{color:"white", textAlign:"center"}} style={{color:"#35b729", textDecoration:"none", textAlign:"center"}}>CONTACTS | </NavLink>

          <NavLink to="/references" activeClassname="selected" activeStyle={{color:"white", textAlign:"center"}} style={{color:"#35b729", textDecoration:"none", textAlign:"center"}}>REFERENCES </NavLink>
</div>
          {this.props.children}

      </div>
    )
  }
}

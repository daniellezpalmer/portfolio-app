import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import image from '../images/trans-logo2.png';

export default class App extends Component {
  render(){
    return (
      <div className="appWholeShebang">
      <p style={{textAlign:"center"}}> THANKS FOR VISITING </p>
      <div style={{textAlign:"center"}}>
      <img src={image} style={{width:700, height:700}}></img>
    </div>
      <div style={{textAlign:"center"}}>
      <button style={{backgroundColor:"white", border:"none", borderRadius:"4px"}}><NavLink to="/home" style={{color:"#35b729", textDecoration:"none"}}>Go on home y'all</NavLink></button>
    </div>
      </div>
    )
  }
}

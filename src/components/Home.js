import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render(){
    return (
      <div className="homeWholeShebang" style={{textAlign:"center"}}>
        <p className="home_intro">Welcome Home!</p>
        <p className="home_body">So nice of you to finally join me!</p>
        <div style={{textAlign:"center"}}>
          <div style={{textAlign:"center"}}>
          <button style={{backgroundColor:"white", border:"none", borderRadius:"4px"}}><NavLink to="/portfolio" style={{color:"#35b729", textDecoration:"none"}}>Check out my portfolio!</NavLink></button>
        </div>
      </div>
      </div>
    )
  }
}

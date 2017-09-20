import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render(){
    return (
      <div className="homeWholeShebang">
        <p className="home_intro">Welcome Home!</p>
        <p className="home_body">So nice of you to finally join me!</p>
        <button><NavLink to="/portfolio" style={{color:"pink", textDecoration:"none"}}>Check out my portfolio!</NavLink></button>
      </div>
    )
  }
}

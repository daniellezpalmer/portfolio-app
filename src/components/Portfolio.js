import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Portfolio extends Component {
  render(){
    return (
      <div className="portfolioWholeShebang" style={{color:"pink", fontSize: "40px", textAlign:"center"}}>
        <p className="portfolio_intro">Wee little portfolio</p>
        <button style={{backgroundColor:"white", border:"none", borderRadius:"4px"}}><NavLink to="/home" style={{color:"pink", textDecoration:"none"}}>Go on home y'all</NavLink></button>
      </div>
    )
  }
}

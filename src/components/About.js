import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class About extends Component {
render(){
  return (
    <div className="aboutWholeShebang">
      <section>
        <p className="about_intro">Hi, I'm Danielle Palmer!</p>
        <p className="about_body">I'm a junior web dev studying front end web development.</p>

        <button><NavLink to="/home" style={{color:"pink", textDecoration:"none"}}>Go on home y'all</NavLink></button>
      </section>
    </div>
    )
  }
}

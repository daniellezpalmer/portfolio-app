import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class About extends Component {
render(){
  return (
    <div className="aboutWholeShebang" style={{textAlign:"center"}}>
      <section>
        <p className="about_intro">Hi, I'm Danielle Palmer!</p>
        <p className="about_body">I'm a junior web dev studying front end web development.</p>

        <div style={{textAlign:"center"}}>
        <button style={{backgroundColor:"white", border:"none", borderRadius:"4px"}}><NavLink to="/home" style={{color:"#35b729", textDecoration:"none"}}>Go on home y'all</NavLink></button>
      </div>
      </section>
    </div>
    )
  }
}

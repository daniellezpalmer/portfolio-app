import React, { Component } from 'react';
import Home from '../components/Home.js';
import About from '../components/About.js';
import Portfolio from './Portfolio';
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    return(
      <div>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/portfolio">PORTFOLIO</NavLink>
          <div>I am Danielle Palmer</div>
          {this.props.children}
          <footer>Sweet little foota</footer>
      </div>
    )
  }
}

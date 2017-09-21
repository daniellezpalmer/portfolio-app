import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Contacts extends Component {


  render(){
    return (
      <div className="contactsWholeShebang">
        <div style={{textAlign:"center", margin:"30px"}}>

            <a href="https://www.gmail.com" style={{textDecoration:"none", color:"#35b729"}}>EMAIL </a>
            <a href="https://www.facebook.com" style={{textDecoration:"none", color:"#35b729"}}>FACEBOOK </a>
            <a href="https://www.github.com" style={{textDecoration:"none", color:"#35b729"}}>GITHUB </a>
            <a href="https://www.yellowpages.com" style={{textDecoration:"none", color:"#35b729"}}>PHONE</a>
            <br></br>
          </div>
          <div style={{textAlign:"center", margin:"30px"}}>
        <button style={{backgroundColor:"white", border:"none", borderRadius:"4px"}}><NavLink to="/home" style={{color:"#35b729", textDecoration:"none"}}>Go on home y'all</NavLink></button>
      </div>
      </div>
    )
  }
}

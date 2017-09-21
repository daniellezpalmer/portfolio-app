import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class References extends Component {
  render(){
    return (
      <div className="contactsWholeShebang">
      <section style={{margin: "25px 100px 25px 100px"}}>


        <dl>
          <dt style={{fontSize:"23", textDecoration:"underline"}}>Reference:</dt>
          <dd>Cracker Jack</dd>
          <dt style={{fontSize:"23", textDecoration:"underline"}}>Contact Info:</dt>
          <dd >512-555-5555</dd>
          <dd>example@gmail.com</dd>
          <dt style={{fontSize:"23", textDecoration:"underline"}}>Recomendation:</dt>
          <dd style={{textAlign:"justify"}}>Kombucha occupy organic roof party asymmetrical authentic, helvetica blog. Hell of keytar messenger bag tumblr church-key copper mug. Cray jean shorts polaroid hot chicken fingerstache hell of ugh taxidermy adaptogen wayfarers selvage keytar. Lo-fi poutine brunch, cliche tbh listicle wolf kinfolk activated charcoal vaporware. Godard hella green juice wolf flannel schlitz fashion axe polaroid farm-to-table woke biodiesel yuccie vexillologist. Hot chicken banh mi gastropub, taxidermy etsy subway tile photo booth air plant four loko church-key selfies ethical skateboard locavore yuccie. Squid waistcoat XOXO pinterest semiotics cliche seitan whatever swag. Meh meditation church-key tousled, copper mug DIY organic viral kombucha hell of artisan pour-over wolf kickstarter. Humblebrag woke synth thundercats you probably haven't heard of them schlitz shabby chic tofu. Shaman beard pitchfork gochujang iceland. Iceland tilde YOLO VHS put a bird on it.</dd>
        </dl>

        <dl>
          <dt style={{fontSize:"23", textDecoration:"underline"}}>Reference:</dt>
          <dd>Em Andem</dd>
          <dt style={{fontSize:"23", textDecoration:"underline"}}>Contact Info:</dt>
          <dd>210-555-5555</dd>
          <dd>example@hotmail.com</dd>
          <dt style={{fontSize:"23", textDecoration:"underline"}}>Recomendation:</dt>
          <dd style={{textAlign:"justify"}}>Hammock squid schlitz af flannel. Gastropub banjo skateboard taxidermy, woke portland single-origin coffee. Quinoa photo booth cray, iPhone shoreditch subway tile yr hoodie seitan skateboard bespoke disrupt. Disrupt bitters ethical drinking vinegar, offal bicycle rights pop-up aesthetic DIY lumbersexual lo-fi echo park austin irony salvia. Readymade messenger bag sriracha, try-hard art party snackwave flannel activated charcoal chillwave. Tumblr mlkshk schlitz retro freegan cornhole salvia af hammock gastropub. Farm-to-table chartreuse thundercats jean shorts pok pok. Ramps la croix everyday carry, poke actually selfies pok pok lumbersexual locavore sriracha cloud bread stumptown. Seitan cronut master cleanse XOXO swag shoreditch subway tile edison bulb chia air plant.</dd>
        </dl>

        <dl>
          <dt style={{fontSize:"23", textDecoration:"underline"}}>Reference:</dt>
          <dd>Hotta Males</dd>
          <dt style={{fontSize:"23", textDecoration:"underline"}}>Contact Info:</dt>
          <dd>817-555-5555</dd>
          <dd>example@yahoo.com</dd>
          <dt style={{fontSize:"23", textDecoration:"underline"}}>Recomendation:</dt>
          <dd style={{textAlign:"justify"}}>Vinyl bitters normcore kickstarter, aesthetic activated charcoal forage meditation wayfarers scenester knausgaard affogato. Portland tofu copper mug venmo etsy microdosing jianbing paleo pop-up cold-pressed 90's. Marfa brunch glossier deep v tattooed, iceland blog twee kale chips. Microdosing pork belly tumeric, lumbersexual enamel pin hell of marfa dreamcatcher. Truffaut tumeric jianbing jean shorts franzen. Taiyaki fanny pack XOXO brunch, heirloom meh craft beer twee jianbing. Cray everyday carry +1 blog semiotics selfies raclette mumblecore gochujang shaman. You probably haven't heard of them meditation mixtape waistcoat blog, butcher iPhone quinoa keffiyeh franzen typewriter twee unicorn YOLO. Mlkshk squid semiotics church-key live-edge fixie. Vegan tumeric normcore pork belly. Tattooed semiotics forage snackwave lyft, polaroid cold-pressed stumptown YOLO humblebrag fingerstache salvia four dollar toast. Cold-pressed vinyl green juice franzen neutra.</dd>
        </dl>
        <br></br>
        <div style={{textAlign:"center"}}>
        <button style={{backgroundColor:"#35b729", border:"none", borderRadius:"4px"}}><NavLink to="/home" style={{color:"white", textDecoration:"none"}}>Go on home y'all</NavLink></button>
      </div>
      </section>

      </div>
    )
  }
}

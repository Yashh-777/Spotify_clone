import React from 'react'
import "./Player.css"
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from "./Footer.js";

function player({spotify}) {
  return (
    <div className="Player">
      <div className="player_body">
        <Sidebar />
        {/*Sidebar*/}
        <Body spotify= {spotify}/>
        {/*bODY*/}
      </div>

      <Footer/>
      {/*Footer*/}
    </div>
  )
}

export default player
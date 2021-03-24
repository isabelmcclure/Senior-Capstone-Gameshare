import React, { useState } from 'react';
//import boardgameImage from '.public/boardgame.jpeg'
import Navbar from '../components/Navbar.js'
import Listing from '../components/Listing.js'
import RentingOption from '../components/RentingOption.js'
import 'react-datepicker/dist/react-datepicker.css'
import style from '../styles/SpecificListing.module.css'

export default function SpecificListing() {

  return (
    
    <div className={style.columnContainer}>
      <Navbar></Navbar>
      <div className={style.rowContainer}>
        <Listing name="Example Board Game" quality="5" description="This is an example board game description" imageUrl="/boardgame.jpeg" rate="$5/day"></Listing>
        <RentingOption rate={5}/>
      </div>
    </div>
  )
}

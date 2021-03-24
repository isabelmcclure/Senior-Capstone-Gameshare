import React, { useState } from 'react';
//import boardgameImage from '.public/boardgame.jpeg'
import Listing from '../components/Listing.js'
import RentingOption from '../components/RentingOption.js'
import 'react-datepicker/dist/react-datepicker.css'
import style from '../styles/SpecificListing.module.css'

export default function SpecificListing() {

  const startDate = "March 21st 2019"
  const endDate = "March 28th 2019"

  return (
    
    <div className={style.container}>
      <Listing name="Example Board Game" quality="5" description="This is an example board game description" imageUrl="/boardgame.jpeg"></Listing>
      <RentingOption></RentingOption>
    </div>
  )
}

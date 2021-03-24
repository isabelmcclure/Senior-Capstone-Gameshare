import React, { useState } from 'react';
//import boardgameImage from '.public/boardgame.jpeg'
import Listing from '../components/Listing.js'
import style from '../styles/SpecificListing.module.css'

export default function SpecificListing() {

  return (

    <div>
      <Listing name="Example Board Game" quality="5" description="This is an example board game description" imageUrl="/boardgame.jpeg"></Listing>
    </div>
  )
}

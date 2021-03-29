import React, { useState } from 'react';
//import boardgameImage from '.public/boardgame.jpeg'
import Listing from '../components/Listing.js'
import RentingOption from '../components/RentingOption.js'
import 'react-datepicker/dist/react-datepicker.css'
import style from '../styles/SpecificListing.module.css'

export default function SpecificListing() {

  const description = "This is an example board game description. Everything beyond this sentence will be nonsense to fill in the page. Board games have a long tradition in Europe. The oldest records of board gaming in Europe date back to Homer's Iliad (written in the 8th century BC), in which he mentions the Ancient Greek game of Petteia.[15] This game of petteia would later evolve into the Roman Ludus Latrunculorum.[15] Board gaming in ancient Europe was not unique to the Greco-Roman world, with records estimating that the ancient Norse game of Hnefatafl was developed sometime before 400AD.[16] In ancient Ireland, the game of Fidchell or Ficheall, is said to date back to at least 144 AD,[17] though this is likely an anachronism. A fidchell board dating from the 10th century has been uncovered in Co. Westmeath, Ireland.[18]"

  return (
    
    <div className={style.columnContainer}>
      <div className={style.rowContainer}>
        <div className={style.secondaryColumnContainer}>
          <Listing name="Example Board Game" quality="5" description={description} imageUrl="/boardgame.jpeg" rate="$5/day"></Listing>
        </div>
        <RentingOption rate={5}/>
      </div>
    </div>
  )
}

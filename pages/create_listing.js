import React, { useState } from 'react';
//import boardgameImage from '.public/boardgame.jpeg'

export default function SpecificListing() {

  const description = "This is an example board game description. Everything beyond this sentence will be nonsense to fill in the page. Board games have a long tradition in Europe. The oldest records of board gaming in Europe date back to Homer's Iliad (written in the 8th century BC), in which he mentions the Ancient Greek game of Petteia.[15] This game of petteia would later evolve into the Roman Ludus Latrunculorum.[15] Board gaming in ancient Europe was not unique to the Greco-Roman world, with records estimating that the ancient Norse game of Hnefatafl was developed sometime before 400AD.[16] In ancient Ireland, the game of Fidchell or Ficheall, is said to date back to at least 144 AD,[17] though this is likely an anachronism. A fidchell board dating from the 10th century has been uncovered in Co. Westmeath, Ireland.[18]"

  return (
    
    <div>
      <h1>Create a Listing</h1>
      <form action="/" method="post">
        <div>
          <label for="game_name">Name of Game</label>
          <input type="text" name="game_name" id="game_name"></input>
        </div>
        <div>
          <label for="description">Description</label>
          <input type="text" name="description" id="description"></input>
        </div>
        <div>
          <label for="quality">Quality</label>
          <input type="text" name="quality" id="quality"></input>
        </div>
        <div>
          <label for="pictures">Pictures</label>
          <input type="text" name="pictures" id="pictures"></input>
        </div>
        <div>
          <label for="price">Price</label>
          <input type="text" name="price" id="price"></input>
        </div>
        <div>
          <label for="start_date">Start Date</label>
          <input type="date" name="start_date" id="start_date"></input>
        </div>
        <div>
          <label for="end_date">End Date</label>
          <input type="date" name="end_date" id="end_date"></input>
        </div>
        <div>
          <label for="location">Location</label>
          <input type="text" name="location" id="location"></input>
        </div>
        <button type="submit">Create Listing</button>
      </form>
    </div>
  )
}

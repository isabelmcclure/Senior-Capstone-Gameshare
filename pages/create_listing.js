import React, { useState } from 'react';
//import boardgameImage from '.public/boardgame.jpeg'

export default function SpecificListing() {

  return (
    
    <div>
      <h1>Create a Listing</h1>
      <form className="mb-6" action="/" method="post">
        <div className="flex flex-col mb-4 ">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="game_name">Name of Game</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="game_name" id="game_name"></input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="description">Description</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="description" id="description"></input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="quality">Quality</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="quality" id="quality"></input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="pictures">Pictures</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="pictures" id="pictures"></input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="price">Price</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="price" id="price"></input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="start_date">Start Date</label>
          <input className="border py-2 px-3 text-grey-darkest" type="date" name="start_date" id="start_date"></input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="end_date">End Date</label>
          <input className="border py-2 px-3 text-grey-darkest" type="date" name="end_date" id="end_date"></input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="location">Location</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="location" id="location"></input>
        </div>
        <div className="flex flex-col mb-4">
          <button className="block bg-green-500 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded">Create Listing</button>
        </div>
      </form>
    </div>
  )
}

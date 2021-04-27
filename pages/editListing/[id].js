import React, { Component, useState } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router'
import dbConnect from '../../util/dbConnect'
import Boardgame from '../../models/boardgame'
export default function id({ boardgame }) {

  const [title, setTitle] = useState(boardgame.title);
  const [description, setDescription] = useState(boardgame.description);
  const [price, setPrice] = useState(boardgame.price);
  const [img, setImg] = useState(boardgame.img);
  const [quality, setQuality] = useState(boardgame.quality);
  const [location, setLocation] = useState(boardgame.location);
  const [available, setAvailable] = useState(boardgame.available);
  const [genre, setGenre] = useState(boardgame.genre);
  const [numPlayers, setNumPlayers] = useState(boardgame.numPlayers);
  
  const router = useRouter()

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log(title)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }

  const handleImgChange = async (e) => {
    const selectedFile = e.target.value;
    const data = new FormData();
    data.append('file', files);
    data.append('upload_preset', 'GameShareImages')

    const res = await fetch('https://api.cloudinary.com/v1_1/dyd5yuvop/image/upload', {
      method: 'POST',
      body: data
    });

    const responseFile = await res.json();
    setImg(responseFile.secure_url);
  }

  const handleQualityChange = (e) => {
    setQuality(e.target.value);
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  }

  const handleAvailableChange = (e) => {
    setAvailable(e.target.value);
  }

  const listingUpdate = async (event) => {
    event.preventDefault()

    console.log(boardgame.genre);
    console.log(title);

    // coordinates calculation
    const opencage = require('opencage-api-client');

    const geo = await opencage.geocode({ key: 'ece176d4b3894699b2058fa884f5b210', q: location, limit: 1, countrycode: 'us' });
    var place = geo.results[0];
    console.log(place.geometry);
    var lat = place.geometry.lat;
    var lng = place.geometry.lng;

    const boardGameData = JSON.stringify({
      title: title,
      description: description,
      quality: quality,
      img: img,
      price: price,
      genre: genre,
      numPlayers: numPlayers,
      location: location,
      lat: lat,
      lng: lng,
      ownerID: boardgame.ownerID,
      available: available
    })

    const api_route = `http://localhost:3000/api/boardgames/` + boardgame._id;

    const gameRes = await fetch('/api/boardgames/' + boardgame._id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: boardGameData
    });

    const result = gameRes.json()

    router.push('/dashboard')
  }

  return (
    <div>
      <h1 className="px-5 py-5 mb-2 uppercase font-bold text-3xl text-grey-darkest">Edit Listing</h1>
      <div className="w-1/2 px-12">
        <form className="mb-6" onSubmit={listingUpdate}>
          <div className="flex flex-col mb-4 ">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="game_name">Name of Game</label>
            <input className="border py-2 px-3 text-grey-darkest" type="text" name="game_name" id="game_name" defaultValue={title} onChange={handleTitleChange}></input>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="description">Description</label>
            <input className="border py-2 px-3 text-grey-darkest" type="text" name="description" id="description" defaultValue={description} onChange={handleDescriptionChange}></input>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="quality">Condition</label>
            <select className="border py-2 px-3 text-grey-darkest" name="quality" id="quality" defaultValue={quality} onChange={handleQualityChange} >
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Great</option>
              <option value="3">3 - Good</option>
              <option value="2">2 - Okay</option>
              <option value="1">1 - Poor</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="pictures">Pictures</label>
            <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-900 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-200 hover:text-blue-800">
              <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span class="mt-2 text-base leading-normal">Select a file</span>
              <input type='file' class="hidden" onChange={handleImgChange} />
            </label>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="price">Price</label>
            <input className="border py-2 px-3 text-grey-darkest" type="number" min="0" step="0.01" name="price" id="price" defaultValue={price} onChange={handlePriceChange}></input>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="location">Location</label>
            <input className="border py-2 px-3 text-grey-darkest" type="text" name="location" id="location" defaultValue={location} onChange={handleLocationChange}></input>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="location">Available</label>
            <select className="border py-2 px-3 text-grey-darkest" type="text" name="available" id="available" defaultValue={available} onChange={handleAvailableChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <button className="block bg-green-500 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Edit Listing</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  dbConnect();
  const dbres = await Boardgame.findById(context.params.id);
  //const res = await axios.get(`/api/boardgames/${context.params.id}`);

  //console.log(dbres)
  const boardgame = JSON.parse(JSON.stringify(dbres));

  //console.log(boardgame);
  return { props: { boardgame } };

}

// This function gets called at build time
export async function getServerSidePaths() {
  dbConnect();
  // Call an external API endpoint to get posts
  const dbres = await Boardgame.find();
  //const res = await axios.get(`/api/boardgames`)
  const boardgame = JSON.parse(JSON.stringify(dbres));

  //console.log(boardgame);

  // Get the paths we want to pre-render based on posts
  const paths = boardgame.map((boardgame) => ({
    params: { id: boardgame._id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
import React, { Component, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dbConnect from '../util/dbConnect'
import Boardgame from '../models/boardgame'
import redirect from 'nextjs-redirect'
import { route } from 'next/dist/next-server/server/router';
import { isAssetError } from 'next/dist/client/route-loader';
import styles from '../styles/Home.module.css'
//import boardgameImage from '.public/boardgame.jpeg'

export default function CreateListing(props) {

  dbConnect();

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quality, setQuality] = useState("");
  const [imageURLs, setImageURLs] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState("");
  const [numPlayers, setNumPlayers] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState(props.userData.email);

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }
  const handleQualityChange = (event) => {
    setQuality(event.target.value)
  }
  const handleImageFileChange = async (event) => {
    const files = event.target.files[0];
    setImageFiles(imageFiles => [...imageFiles, files.name])
    const data = new FormData();
    data.append('file', files);
    data.append('upload_preset', 'GameShareImages')

    const res = await fetch('https://api.cloudinary.com/v1_1/dyd5yuvop/image/upload', {
      method: 'POST',
      body: data
    });

    const file = await res.json();
    console.log("cloudinary api")
    console.log(file)
    setImageURLs(imageURLs => [...imageURLs, file.secure_url])
  }
  const handlePriceChange = (event) => {
    setPrice(event.target.value)
  }
  const handleGenreChange = (event) => {
    setGenre(event.target.value)
  }
  const handleNumPlayersChange = (event) => {
    setNumPlayers(event.target.value)
  }
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value)
  }
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value)
  }
  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    // coordinates calculation
    const opencage = require('opencage-api-client');

    const geo = await opencage.geocode({ key: 'ece176d4b3894699b2058fa884f5b210', q: location, limit: 1, countrycode: 'us' });
    //console.log(JSON.stringify(geo));
    if (geo.status.code === 200) {
      if (geo.results.length > 0) {
        var place = geo.results[0];
        console.log(place.geometry);
      }
    } else if (geo.status.code === 402) {
      console.log('hit free trial daily limit');
      console.log('become a customer: https://opencagedata.com/pricing');
    } else {
      // other possible response codes:
      // https://opencagedata.com/api#codes
      console.log('error', geo.status.message);
    }
    ///////////////////////////////////////

    const boardGameData = JSON.stringify({
      title: title,
      description: description,
      quality: quality,
      images: imageURLs,
      price: price,
      genre: genre,
      numPlayers: numPlayers,
      ownerID: email,
      location: location,
      lat: place.geometry.lat,
      lng: place.geometry.lng,
      available: true
    })

    /*const gameRes = await fetch('/api/boardgames', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, *//*',
        'Content-Type': 'application/json'
      },
      body: boardGameData
    });*/

    try{
      const gameRes = await Boardgame.create(boardGameData);
    }
   catch (error) {
     console.log(error);
   }

    console.log("boargame api")
    console.log(gameRes.json());
    router.push("/dashboard")

  }


  return (

    <div className={styles.landing}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
      <h1 className="px-5 py-5 mb-2 uppercase font-bold text-3xl text-grey-darkest">Create a Listing</h1>
      <div className="w-1/2 px-12">
        <form className="mb-6" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4 ">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="game_name">Name of Game</label>
            <input className="border py-2 px-3 text-grey-darkest" type="text" name="game_name" id="game_name" onChange={handleTitleChange}></input>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="description">Description</label>
            <input className="border py-2 px-3 text-grey-darkest" type="text" name="description" id="description" onChange={handleDescriptionChange}></input>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="quality">Quality</label>
            {/*<input className="border py-2 px-3 text-grey-darkest" type="text" name="quality" id="quality" onChange={handleQualityChange}></input>*/}
            <select className="border py-2 px-3 text-grey-darkest" id="quality" name="quality" onChange={handleQualityChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="pictures">Pictures (Add up to 6)</label>
            <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-900 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-200 hover:text-blue-800">
              <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span class="mt-2 text-base leading-normal">Select a file</span>
              <input type='file' class="hidden" onChange={handleImageFileChange} />
            </label>
            {imageFiles.map((image, index) => { return (<p>{index + 1}. {image}</p>) })}
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="price">Price</label>
            <input className="border py-2 px-3 text-grey-darkest" type="text" name="price" id="price" onChange={handlePriceChange}></input>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="genre">Genre</label>
            <input className="border py-2 px-3 text-grey-darkest" type="text" name="genre" id="genre" onChange={handleGenreChange}></input>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="numPlayers">Number of Players</label>
            <input className="border py-2 px-3 text-grey-darkest" type="text" name="numPlayers" id="numPlayers" onChange={handleNumPlayersChange}></input>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="location">Location</label>
            <input className="border py-2 px-3 text-grey-darkest" type="text" name="location" id="location" onChange={handleLocationChange}></input>
          </div>
          <div className="flex flex-col mb-4">
            <button className="block bg-green-500 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create Listing</button>
          </div>
        </form>
      </div>
    </div>
  )
}

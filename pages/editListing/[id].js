import React, {Component, useState } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router'
export default function id({ boardgame }) {

    const [title, setTitle] = useState(boardgame.title);
    const [description, setDescription] = useState(boardgame.description);
    const [price, setPrice] = useState(boardgame.price);
    const [img, setImg] = useState(boardgame.img);
    const [quality, setQuality] = useState(boardgame.quality);
    const [location, setLocation] = useState(boardgame.location);

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
        body:data
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

    const listingUpdate = async (event) => {
        event.preventDefault()

        console.log(title);

        const boardGameData = JSON.stringify({ title: title,
          description: description,
          quality: quality,
          img: img,
          price: price,
          genre: "test genre",
          numPlayers: 5,
          location: location,
          ownerID: boardgame.ownerID,
          available: true})

        const api_route = `http://localhost:3000/api/boardgames/` + boardgame._id;

        const gameRes = await fetch('/api/boardgames/' + boardgame._id, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body:boardGameData
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
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="quality">Quality</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="quality" id="quality"defaultValue={quality} onChange={handleQualityChange} ></input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="pictures">Pictures</label>
          <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-900 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-200 hover:text-blue-800">
          <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span class="mt-2 text-base leading-normal">Select a file</span>
          <input type='file' class="hidden" onChange={handleImgChange}/>
          </label>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="price">Price</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="price" id="price" defaultValue={price} onChange={handlePriceChange}></input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="location">Location</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="location" id="location" defaultValue={location} onChange={handleLocationChange}></input>
        </div>
        <div className="flex flex-col mb-4">
          <button className="block bg-green-500 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Edit Listing</button>
        </div>
      </form>
      </div>
    </div>
    )
}

export async function getStaticProps(context) {
  const res = await axios.get(`http://localhost:3000/api/boardgames/${context.params.id}`);

  const boardgame = res.data.data;

  //console.log(boardgame);
  return { props: { boardgame } };

}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts

  const res = await axios.get(`http://localhost:3000/api/boardgames`)
  const boardgame = res.data.data;

  //console.log(boardgame);

  // Get the paths we want to pre-render based on posts
  const paths = boardgame.map((boardgame) => ({
    params: { id: boardgame._id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

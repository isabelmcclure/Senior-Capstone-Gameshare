import React, { useState } from 'react';
//import boardgameImage from '.public/boardgame.jpeg'
import style from '../styles/Listing.module.css'

export default function Listing() {

  const [name, setName] = useState("Example BoardGame")
  const [quality, setQuality] = useState(5)
  const [description, setDescription] = useState("This is an example board game that will be displayed in the specifc listing page on GameShare")
  const [imageUrl, setImageUrl] = useState("/boardgame.jpeg")

  return (

    <div className={style.container}>
      <main>
          <h1 className={style.title}>{name}</h1>
          <img src={imageUrl} alt="Vercel Logo"/>
          <h1 className={style.description}>What is {name}?</h1>
          {description}
          <h1 className={style.description}>Quailty: {quality}</h1>
      </main>
    </div>
  )
}

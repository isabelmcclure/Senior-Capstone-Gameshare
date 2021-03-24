import React, { useState } from 'react';
//import boardgameImage from '.public/boardgame.jpeg'
import style from '../styles/Listing.module.css'

export default function Listing(props) {

  const [name, setName] = useState(props.name)
  const [quality, setQuality] = useState(8)
  const [description, setDescription] = useState("This is an example board game that will be displayed in the specifc listing page on GameShare")
  const [imageUrl, setImageUrl] = useState("/boardgame.jpeg")

  return (

    <div className={style.container}>
      <main>
          <h1 className={style.title}>{props.name}</h1>
          <img src={props.imageUrl} alt="Vercel Logo"/>
          <h1 className={style.description}>What is {props.name}?</h1>
          {props.description}
          <h1 className={style.description}>Quailty: {props.quality}</h1>
      </main>
    </div>
  )
}

import React, { useState } from 'react';
//import boardgameImage from '.public/boardgame.jpeg'
import style from '../styles/Listing.module.css'

export default function Listing(props) {

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

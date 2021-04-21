import React, { useState } from 'react';
//import boardgameImage from '.public/boardgame.jpeg'
import Images from '../components/Images.js'
import style from '../styles/Listing.module.css'

export default function Listing(props) {

  return (

    <div className={style.container}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
      <main>
          <h1 className={style.title}>{props.name}</h1>
          <Images images={props.images}></Images>
          <h1 className={style.description}>What is {props.name}?</h1>
          {props.description}
          <h1 className={style.description}>Quailty: {props.quality}</h1>
          <h1 className={style.description}>Rate: {props.rate}</h1>
      </main>
    </div>
  )
}

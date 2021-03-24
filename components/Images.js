import React, { useState } from 'react';
//import boardgameImage from '.public/boardgame.jpeg'
import style from '../styles/Images.module.css'

export default function Listing(props) {

  return (

    <div>
      <div className={style.container}>
          <img className={style.image} src={props.imageUrl} alt="Vercel Logo"/>
          <img className={style.image} src={props.imageUrl} alt="Vercel Logo"/>
          <img className={style.image} src={props.imageUrl} alt="Vercel Logo"/>
      </div>
      <div className={style.container}>
          <img className={style.image} src={props.imageUrl} alt="Vercel Logo"/>
          <img className={style.image} src={props.imageUrl} alt="Vercel Logo"/>
          <img className={style.image} src={props.imageUrl} alt="Vercel Logo"/>
      </div>
    </div>
  )
}

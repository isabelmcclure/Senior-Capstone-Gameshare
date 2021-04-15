import React, { useState } from 'react';
import ModalImage from 'react-modal-image'
//import boardgameImage from '.public/boardgame.jpeg'
import style from '../styles/Images.module.css'

export default function Listing(props) {

  return (

    <div className={style.columnContainer}>
      <div className={style.rowContainer}>
          <ModalImage className={style.image} small={props.images[0]} large={props.images[0]} alt="Vercel Logo"/>
          <ModalImage className={style.image} small={props.images[1]} large={props.images[1]} alt="Vercel Logo"/>
          <ModalImage className={style.image} small={props.images[2]} large={props.images[2]} alt="Vercel Logo"/>
      </div>
      <div className={style.rowContainer}>
          <ModalImage className={style.image} small={props.images[3]} large={props.images[3]} alt="Vercel Logo"/>
          <ModalImage className={style.image} small={props.images[4]} large={props.images[4]} alt="Vercel Logo"/>
          <ModalImage className={style.image} small={props.images[5]} large={props.images[5]} alt="Vercel Logo"/>
      </div>
    </div>
  )
}

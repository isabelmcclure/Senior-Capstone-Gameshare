import React, { useState } from 'react';
import ModalImage from 'react-modal-image'
//import boardgameImage from '.public/boardgame.jpeg'
import style from '../styles/Images.module.css'

export default function Listing(props) {

  return (

    <div className={style.columnContainer}>
      <div className={style.rowContainer}>
          <ModalImage className={style.image} small={props.imageUrl} large={props.imageUrl} alt="Vercel Logo"/>
          <ModalImage className={style.image} small={props.imageUrl} large={props.imageUrl} alt="Vercel Logo"/>
          <ModalImage className={style.image} small={props.imageUrl} large={props.imageUrl} alt="Vercel Logo"/>
      </div>
      <div className={style.rowContainer}>
          <ModalImage className={style.image} small={props.imageUrl} large={props.imageUrl} alt="Vercel Logo"/>
          <ModalImage className={style.image} small={props.imageUrl} large={props.imageUrl} alt="Vercel Logo"/>
          <ModalImage className={style.image} small={props.imageUrl} large={props.imageUrl} alt="Vercel Logo"/>
      </div>
    </div>
  )
}

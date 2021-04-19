import React, { useState } from 'react';
import ModalImage from 'react-modal-image'
//import boardgameImage from '.public/boardgame.jpeg'
import style from '../styles/Images.module.css'

export default function Listing(props) {

  return (

    <div className={style.columnContainer}>
      <div className={style.rowContainer}>
          {props.boardgame.images.map((image, index) => {
            if (index < 6){
              return (
                <ModalImage className={style.image} small={image} large={image} alt="Vercel Logo"/>
              ) 
            }
          })}
      </div>
    </div>
  )
}

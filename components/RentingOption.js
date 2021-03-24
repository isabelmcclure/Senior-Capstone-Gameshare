import React, { useState } from 'react';
//import boardgameImage from '.public/boardgame.jpeg'
import DatePicker from 'react-datepicker'
import style from '../styles/RentingOption.module.css'

export default function RentingOption() {

  return (

    <div className={style.columnContainer}>
      <h1 className={style.title}>Want to rent this game?</h1>
      <div className={style.rowContainer}>
        Select rent date: <DatePicker className={style.card} selected={new Date()}/>
      </div>
      <div className={style.rowContainer}>
        Select rent date: <DatePicker className={style.card} selected={new Date()}/>
      </div>
    </div>
  )
}

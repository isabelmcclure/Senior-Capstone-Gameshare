import React, { useState } from 'react';
//import boardgameImage from '.public/boardgame.jpeg'
import DatePicker from 'react-datepicker'
import style from '../styles/RentingOption.module.css'

export default function RentingOption() {

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [rentAmount, setRentAmount] = useState(0)

  const startDateSelected = (value, event) => {setStartDate(value)}

  const endDateSelected = (value, event) => {
    if(!(startDate > value)){
      setEndDate(value)
      setRentAmount(Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)))
    }
  }


  return (

    <div className={style.columnContainer}>
      <h1 className={style.title}>Want to rent this game?</h1>
      <div className={style.rowContainer}>
        Select rent date: <DatePicker className={style.card} selected={startDate} onChange={startDateSelected}/>
      </div>
      <div className={style.rowContainer}>
        Select rent date: <DatePicker className={style.card} selected={endDate} onChange={endDateSelected}/>
      </div>
      <img className={style.image} src='/location.png'/>
      {rentAmount}
    </div>
  )
}

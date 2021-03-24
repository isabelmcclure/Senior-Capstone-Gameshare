import { PromiseProvider } from 'mongoose';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
//import boardgameImage from '.public/boardgame.jpeg'
import DatePicker from 'react-datepicker'
import style from '../styles/Navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {

  return (

    <div className={style.rowContainer}>
      <img className={style.logo} src='/bgicon.png'/>
      <h1 className={style.title}>GameShare</h1>
      <img className={style.profile} src='/profileicon.png'/>
    </div>
  )
}

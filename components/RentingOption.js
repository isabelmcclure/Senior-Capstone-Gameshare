import { PromiseProvider } from 'mongoose';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
//import boardgameImage from '.public/boardgame.jpeg'
import DatePicker from 'react-datepicker'
import style from '../styles/RentingOption.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router'
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IdoMPBL7EVXf27y0v5tmJygTkTgd6iwveMdLQK4DH3oZ8fZZWp6yzxV03dX6ztZ8zNUt1RTDlRc1lX5kaW12jj6004Wl23sTl');

export default function RentingOption(props) {

  const router = useRouter()

  const handleClick = async (event) => {
    event.preventDefault();
    // Get Stripe.js instance
    const stripe = await stripePromise;


    // Call your backend to create the Checkout Session
    const response = await fetch('../api/checkout/create-checkout-session', {
      method: 'POST', headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ title: props.product, price: props.rate + '00', path: window.location.href, productID: props.id })
    });

    const session = await response.json();
    //console.log(session)

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [rentAmount, setRentAmount] = useState(0)

  const startDateSelected = (value, event) => { setStartDate(value) }

  const endDateSelected = (value, event) => {
    if (!(startDate > value)) {
      setEndDate(value)
      setRentAmount(Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) * props.rate)
    }
  }


  return (

    <div className={style.columnContainer}>
      <h1 className={style.title}>Want to rent this game?</h1>
      <div className={style.rowContainer}>
        Select rent date: <DatePicker className={style.card} selected={startDate} onChange={startDateSelected} />
      </div>
      <div className={style.rowContainer}>
        Select return date: <DatePicker className={style.card} selected={endDate} onChange={endDateSelected} />
      </div>
      <img className={style.image} src='/location.png' />
      <h1 className={style.description}>Amount to rent: ${rentAmount}</h1>
      <div clasName={style.rowContainer}>
        <button className="bg-blue-500 p-2 rounded text-green-200">Report</button>
        <button className="bg-blue-500 p-2 rounded text-green-200">Contact Lender</button>
        <button className="bg-blue-500 p-2 rounded text-green-200" role="link" onClick={handleClick}>Rent</button>
      </div>
    </div>
  )
}

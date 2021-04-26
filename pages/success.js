import React, { Component, useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import useSWR from 'swr'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Success({ props }) {
    const [customerName, setCustomerName] = useState("");
    const [sellerEmail, setSellerEmail] = useState("");

    const router = useRouter();
    const { data, error } = useSWR(
        router.query.session_id ?
            `/api/checkout/${router.query.session_id}`
            : null,
        (url) => fetch(url).then(res => res.json())
    )
    //console.log(data)
    const { session_id } = router.query

    const getInfo = async () => {
        try {
            const productID = await data.session.metadata.productID
            const res = await axios.get(`/api/boardgames/${productID}`)

            const customerNameData = await data.session.payment_intent.charges.data[0].billing_details.name;
            setCustomerName(customerNameData);
            setSellerEmail(res.data.data.ownerID)
        } catch (error) {
        }

    }

    try {
        getInfo()
    } catch (error) {
        console.log(error)
    }





    return (
        <div className={styles.landing}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
            <Head>
                <title>Thanks for your order!</title>
                <link rel="icon" href="/GS.png" />
            </Head>
            <body>
                <div className="flex flex-col mx-auto p-12 w-1/2">
                    <h1 className="text-3xl font-bold">Thanks for your order details {customerName ? JSON.stringify(customerName, null, 2) : 'Loading...'}!</h1>
                    <br />
                    <p>
                        We appreciate your business! Please contact <a className="font-bold">{sellerEmail ? JSON.stringify(sellerEmail, null, 2) : 'Loading...'}</a> to coordinate
                        your exchange.
                    </p>
                </div>
            </body>
        </div>
    )
}


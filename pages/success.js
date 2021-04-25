import React, { Component, useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import useSWR from 'swr'
import axios from 'axios'
import styles from '../styles/Home.module.css'

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
    const { session_id } = router.query

    const getInfo = async () => {

        const productID = await data.session.cancel_url.split('/')
        const id = productID[4]
        const res = await axios.get(`/api/boardgames/${id}`)

        const customerNameData = await data.session.payment_intent.charges.data[0].billing_details.name;
        setCustomerName(customerNameData);
        setSellerEmail(res.data.data.ownerID)
    }

    useEffect(() => {
        while (customerName == "" && sellerEmail == "") {
            getInfo()
        }
    })



    return (
        <div className={styles.landing}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
            <head><title>Thanks for your order!</title></head>
            <body>
                <div className="flex flex-col mx-auto p-12 w-1/2">
                    <h1 className="text-3xl font-bold">Thanks for your order details {customerName ? JSON.stringify(customerName, null, 2) : 'Loading...'}!</h1>
                    <br />
                    <p>
                        We appreciate your business!
                        If you have any questions, please email <a>{sellerEmail ? JSON.stringify(sellerEmail, null, 2) : 'Loading...'}</a>.
                    </p>
                </div>
            </body>
        </div>
    )
}


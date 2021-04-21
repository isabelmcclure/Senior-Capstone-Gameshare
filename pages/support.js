import { useRouter } from 'next/router'
import { Component, useState } from 'react'
import { Magic } from 'magic-sdk'
import useAuth from '../hooks/useAuth'
import Support from '../components/Support.js'
import Error from 'next/error'

export default function SupportPage() {
    const router = useRouter();
    const { data, loading, error } = useAuth();

    //console.log(data)

    if (!data) {
        return <Error statusCode={404} />
    }

    return (
        <div>
            {<Support userData={data.userD}></Support>}
        </div>
    )
}
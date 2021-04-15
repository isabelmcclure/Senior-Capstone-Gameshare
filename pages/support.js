import { useRouter } from 'next/router'
import {Component, useState} from 'react'
import { Magic } from 'magic-sdk'

export default function Support() {
    const router = useRouter()

    const [message, setMessage] = useState("");
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault()

        const { elements } = event.target;

        // the magic code
        const did = await new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY)
            .auth
            .loginWithMagicLink({ email: elements.email.value })

        // Once we have the did from magic, login with our own API
        const authRequest = await fetch('/api/login', {
            method: 'POST',
            headers: { Authorization: `Bearer ${did}` }
        })

        if (authRequest.ok) {
            // We successfully logged in, our API
            // set authorization cookies and now we
            // can redirect to the dashboard!
            router.push('/dashboard')
        } else {
            throw new Error(await authRequest.text())
        }
    }

    return (
        <div>
        <h1 className="px-5 py-5 mb-2 uppercase font-bold text-3xl text-grey-darkest">Support</h1>
        <div className="w-1/2 px-12">
        <form className="mb-6" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4 ">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="game_name">Please let us know how we can help</label>
            <textarea className="border py-2 px-3 text-grey-darkest" type="text" name="game_name" id="game_name" onChange={handleMessageChange}></textarea>
          </div>
          <div className="flex flex-col mb-4">
            <button className="block bg-green-500 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Submit</button>
          </div>
        </form>
        </div>
      </div>

    )
}
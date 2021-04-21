import { useRouter } from 'next/router'
import { Magic } from 'magic-sdk'
import { useState } from 'react'

export default function Login(props) {
  const router = useRouter()

  const [email, setEmail] = useState("")

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // the magic code
    const did = await new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY)
      .auth
      .loginWithMagicLink({ email: email })

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
      <h1 className="px-5 py-5 mb-2 uppercase font-bold text-3xl text-grey-darkest">{props.type}</h1>
      <div className="w-1/2 px-12">
        <form className="mb-6" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4 ">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="game_name">Email</label>
            <input className="border py-2 px-3 text-grey-darkest" type="text" name="email" id="email" onChange={handleEmailChange}></input>
          </div>
          <div className="flex flex-col mb-4">
            <button className="block bg-green-500 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">{props.type}</button>
          </div>
        </form>
      </div>
    </div>

  )
}
import React, {Component, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import redirect from 'nextjs-redirect'
import { route } from 'next/dist/next-server/server/router';
//import boardgameImage from '.public/boardgame.jpeg'

export default function Support(props){

  const router = useRouter();

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState(props.userData.email);

  const handleMessageChange = (event) => {
      setMessage(event.target.value);
  }

  const handleSubmit = async (event) => {
      event.preventDefault()

      const supportData = JSON.stringify({ message: message,
          ownerID: email});
      
      const res = await fetch('/api/support', {
          method: 'POST',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body:supportData
      });

      router.push("/dashboard");
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

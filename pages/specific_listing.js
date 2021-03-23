import React, { useState } from 'react';

export default function SpecificListing() {

  const [name, setName] = useState("Example BoardGame")
  const [quality, setQuality] = useState(5)
  const [description, setDescription] = useState("This is an example board game that will be displayed in the specifc listing page on GameShare")
  const [imageUrl, setImageUrl] = useState("image_url")

  return (

    <div>
      <main>
        {name}
      </main>
    </div>
  )
}

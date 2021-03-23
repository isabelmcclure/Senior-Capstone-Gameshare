import Head from 'next/head'
import React, {Component} from 'react'
import Image from '../models/image'
import styles from '../styles/Home.module.css'

console.log("reached test_image.js")

class TestImage extends Component {

  state = {
    name: "Keerat"
  }

  fileDetails = async event => {
    console.log(event.target.files)

    const files = event.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'GameShareImages')

    console.log(data.entries())
    
    const res = await fetch('https://api.cloudinary.com/v1_1/dyd5yuvop/image/upload', {
      method: 'POST',
      body:data
    });

    const file = await res.json();
    console.log(file.secure_url);

    const image = await Image.create(file.secure_url, "1")
  }

  render() {
    return (
      <div>
        {this.state.name}
        {/*<form action='/api/images' method="post" encType="multipart/form-data">*/}
          <input type='file' name='image' onChange={this.fileDetails}/>
          <button type="submit">Send</button>
        {/*</form>*/}
      </div>
    )
  }
}

export default TestImage

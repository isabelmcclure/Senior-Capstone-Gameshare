import React, {Component, useState } from 'react';
//import boardgameImage from '.public/boardgame.jpeg'

class CreateListing extends Component {

  constructor(props) {
    super(props);
    this.state = {gameName: '',
                  description: '',
                  quality: '',
                  imageFile: '',
                  price: '',
                  startDate: '',
                  endDate: '',
                  location: ''};

    this.handleGameNameChange = this.handleGameNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleQualityChange = this.handleQualityChange.bind(this);
    this.handleImageFileChange = this.handleImageFileChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleGameNameChange(event){
    console.log(event.target.value)
    this.setState({gameName: event.target.value});
  }
  handleDescriptionChange(event){
    this.setState({description: event.target.value});
  }
  handleQualityChange(event){
    this.setState({quality: event.target.value});
  }
  handleImageFileChange(event){
    this.setState({imageFile: event.target.files[0]});
  }
  handlePriceChange(event){
    this.setState({price: event.target.value});
  }
  handleStartDateChange(event){
    this.setState({startDate: event.target.value});
  }
  handleEndDateChange(event){
    this.setState({endDate: event.target.value});
  }
  handleLocationChange(event){
    this.setState({location: event.target.value});
  }
  async handleSubmit(event){
    event.preventDefault();

    const files = this.state.imageFile;
    const data = new FormData();
    data.append('file', files);
    data.append('upload_preset', 'GameShareImages')

    console.log(data.entries())
    
    const res = await fetch('https://api.cloudinary.com/v1_1/dyd5yuvop/image/upload', {
      method: 'POST',
      body:data
    });

    const file = await res.json();
    console.log(file.secure_url);

    const boardGameData = new FormData();
    boardGameData.append('title', this.state.gameName);
    boardGameData.append('description', this.state.description);
    boardGameData.append('quality', this.state.quality);
    boardGameData.append('img', file.secure_url);
    boardGameData.append('price', this.state.price);
    boardGameData.append('duration', this.state.startDate);
    boardGameData.append('location', this.state.location);

    const gameRes = await fetch('http://localhost:3000/api/boardgames/', {
      method: 'POST',
      body:boardGameData
    });

    console.log(gameRes.json());
  }

  render() {
    return (
    
    <div>
      <h1 className="px-5 py-5 mb-2 uppercase font-bold text-3xl text-grey-darkest">Create a Listing</h1>
      <div className="w-1/2 px-12">
      <form className="mb-6" onSubmit={this.handleSubmit}>
        <div className="flex flex-col mb-4 ">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="game_name">Name of Game</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="game_name" id="game_name" onChange={this.handleGameNameChange}></input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="description">Description</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="description" id="description" onChange={this.handleDescriptionChange}></input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="quality">Quality</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="quality" id="quality" onChange={this.handleQualityChange}></input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="pictures">Pictures</label>
          <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-900 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-200 hover:text-blue-800">
          <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span class="mt-2 text-base leading-normal">Select a file</span>
          <input type='file' class="hidden" onChange={this.handleImageFileChange}/>
          </label>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="price">Price</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="price" id="price" onChange={this.handlePriceChange}></input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="start_date">Start Date</label>
          <input className="border py-2 px-3 text-grey-darkest" type="date" name="start_date" id="start_date" onChange={this.handleStartDateChange}></input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="end_date">End Date</label>
          <input className="border py-2 px-3 text-grey-darkest" type="date" name="end_date" id="end_date" onChange={this.handleEndDateChange}></input>
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="location">Location</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" name="location" id="location" onChange={this.handleLocationChange}></input>
        </div>
        <div className="flex flex-col mb-4">
          <button className="block bg-green-500 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create Listing</button>
        </div>
      </form>
      </div>
    </div>
    )
    }
}

export default CreateListing

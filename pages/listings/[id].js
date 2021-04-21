import React, { useState } from 'react';
//import boardgameImage from '.public/boardgame.jpeg'
import axios from 'axios'
import GameBar from '../../components/GameBar.js'
import Images from '../../components/Images.js'
import dbConnect from '../../util/dbConnect'
import Boardgame from '../../models/boardgame'

export default function id({ boardgame }) {

  //const description = "This is an example board game description. Everything beyond this sentence will be nonsense to fill in the page. Board games have a long tradition in Europe. The oldest records of board gaming in Europe date back to Homer's Iliad (written in the 8th century BC), in which he mentions the Ancient Greek game of Petteia.[15] This game of petteia would later evolve into the Roman Ludus Latrunculorum.[15] Board gaming in ancient Europe was not unique to the Greco-Roman world, with records estimating that the ancient Norse game of Hnefatafl was developed sometime before 400AD.[16] In ancient Ireland, the game of Fidchell or Ficheall, is said to date back to at least 144 AD,[17] though this is likely an anachronism. A fidchell board dating from the 10th century has been uncovered in Co. Westmeath, Ireland.[18]"
  //console.log(boardgame)
  return (
    <div>
      <GameBar boardgame={boardgame} rate={boardgame.price} product={boardgame.title} id={boardgame._id} ></GameBar>
      <Images boardgame={boardgame}></Images>
    </div>

  )
}



export async function getStaticProps(context) {
  dbConnect();
  const dbres = await Boardgame.findById(context.params.id);
  //const res = await axios.get(`/api/boardgames/${context.params.id}`);

  //console.log(dbres)
  const boardgame = JSON.parse(JSON.stringify(dbres));

  //console.log(boardgame);
  return { props: { boardgame } };

}

// This function gets called at build time
export async function getStaticPaths() {
  dbConnect();
  // Call an external API endpoint to get posts
  const dbres = await Boardgame.find();
  //const res = await axios.get(`/api/boardgames`)
  const boardgame = JSON.parse(JSON.stringify(dbres));

  //console.log(boardgame);

  // Get the paths we want to pre-render based on posts
  const paths = boardgame.map((boardgame) => ({
    params: { id: boardgame._id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
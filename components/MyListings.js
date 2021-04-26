import Link from 'next/link'
import axios from 'axios'
import React, { Component, useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const MyListings = (props) => {

    const router = useRouter();

    const deleteListing = async event => {
        event.preventDefault();

        //const res = await axios.delete(`/api/boardgames/${event.target.id.value}`)
        const res = await fetch(`/api/boardgames/${event.target.id.value}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json, text/plain, */',
              'Content-Type': 'application/json'
            }
          });
        console.log(res);
        window.location.reload(false);
    }


    return (
        <div className={styles.landing}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
            <h1 className="mt-7 w-5/6 mx-auto text-3xl">My Listings</h1>

            <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
                <tbody>
                    <tr className="text-left border-b-2 border-gray-300">
                        <th className="px-4 py-3">Game</th>
                        <th className="px-4 py-3">Genre</th>
                        <th className="px-4 py-3">Players</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3">Available</th>
                        <th className="px-4 py-3">Posted At</th>
                        <th className="px-4 py-3">Actions</th>
                    </tr>

                    {/*props.userData.boardgames.map*/}
                    {props.userBoardgames.map((boardgame) => {
                        return (
                            <tr className="bg-gray-100 border-b border-gray-200" key={boardgame.title}>
                                <td className="px-4 py-3">{boardgame.title}</td>
                                <td className="px-4 py-3">{boardgame.genre}</td>
                                <td className="px-4 py-3">{boardgame.numPlayers}</td>
                                <td className="px-4 py-3">${boardgame.price}</td>
                                <td className="px-4 py-3">{boardgame.available.toString()}</td>
                                <td className="px-4 py-3">{boardgame.postedAt.split('T')[0]}</td>

                                <td className="flex px-4 py-3">
                                    <Link href={`/listings/${boardgame._id}`}><button className="bg-blue-500 p-2 rounded text-green-200 px-2">View</button></Link>
                                    <Link href={`/editListing/${boardgame._id}`}><button className="bg-blue-500 p-2 rounded text-green-200">Edit</button></Link>
                                    <form onSubmit={deleteListing}>
                                        <input type="hidden" name="id" value={boardgame._id}></input>
                                        <button className="bg-blue-500 p-2 rounded text-green-200" type="submit">Delete</button>
                                    </form>

                                </td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
            <div className="pt-5 p-28">
                <button className="bg-blue-500 p-2 mr-2 rounded text-green-200" onClick={() => { router.push("newListing/") }}>Add New Listing</button>
            </div>
        </div>
    );
}

export default MyListings;
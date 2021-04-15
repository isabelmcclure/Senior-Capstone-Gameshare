import React, { Component, useState } from 'react';
import Link from 'next/link'

const QueryListing = (props) => {

    const [title, setTitle] = useState("");
    const [bg_filtered, setBG] = useState(props.listings);

    const handleGameNameQuery = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        // prevent form from refreshing the page
        e.preventDefault();

        setBG(bg_filtered.filter((bg) => bg.title === title));
    }

    return (
        <div>
            {/* <QueryBar> */}
            <div className="max-w-3xl mx-auto pt-4">
                <form className="flex justify-center bg-blue-300 p-4 rounded-full shadow-lg" onSubmit={handleSubmit}>
                    <label className="p-3">
                        <div className="font-mono font-extrabold text-blue-700 text-xl text-center">Name:</div>
                        <input className="rounded-full p-1" type="text" name="game_name" id="game_name" placeholder="Monopoly" onChange={handleGameNameQuery}></input>
                    </label>

                    <label className="p-3">
                        <div className="font-mono font-extrabold text-blue-700 text-xl text-center">Location:</div>
                        <input className="rounded-full p-1" type="text" name="location" id="location" placeholder="College Station"></input>
                    </label>

                    <label className="p-3">
                        <div className="font-mono font-extrabold text-blue-700 text-xl text-center">Duration:</div>
                        <input className="rounded-full p-1" type="date" name="date"></input>
                    </label>

                    <input className="rounded-full ml-6 py-3 px-6" type="submit" value="Submit" />
                </form>
            </div>

            {/* QueryListings */}
            <h1 className="mt-7 w-5/6 mx-auto text-3xl">Current Listings</h1>
            <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
                <tbody>
                    <tr className="text-left border-b-2 border-gray-300">
                        <th className="px-4 py-3">Game</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3">Date Posted</th>
                        <th className="px-4 py-3"> </th>
                    </tr>

                    {bg_filtered.map((boardgame) => {
                        return (
                            <tr className="bg-gray-100 border-b border-gray-200" key={boardgame._id}>
                                <td className="px-4 py-3">{boardgame.title}</td>
                                <td className="px-4 py-3">${boardgame.price}</td>
                                <td className="px-4 py-3">{boardgame.postedAt}</td>
                                <td className="px-4 py-3">
                                    <Link href={`/listings/${boardgame._id}`}><button className="bg-blue-500 p-2 rounded text-green-200">View</button></Link>
                                    <button className="bg-blue-500 p-2 rounded text-green-200">Edit</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>
        </div>
    );
}

export default QueryListing;
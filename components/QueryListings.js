import React, { Component, useState } from 'react';
import Link from 'next/link'
import QueryBar from "../components/QueryBar";
import styles from '../styles/Home.module.css'

const QueryListing = (props) => {

    const [title, setTitle] = useState("");
    const [max_price, setMaxPrice] = useState("");
    const [genre, setGenre] = useState("");
    const [max_players, setMaxPlayers] = useState("");
    const [location, setLocation] = useState("");


    let listings = props.listings.filter((bg) => bg.available == true);
    const [bg_filtered, setBG] = useState(listings);

    const handleGameNameQuery = (e) => {
        setTitle(e.target.value);
    }

    const handlePriceQuery = (e) => {
        setMaxPrice(e.target.value);
    }

    const handleGenreQuery = (e) => {
        setGenre(e.target.value);
    }

    const handleMaxPlayersQuery = (e) => {
        setMaxPlayers(e.target.value);
    }

    const handleLocationQuery = (e) => {
        setLocation(e.target.value);
    }

    const handleSubmit = async (e) => {
        // prevent form from refreshing the page
        e.preventDefault();

        // reset bg_filtered state variable
        listings = props.listings.filter((bg) => bg.available == true);

        if (title !== "") {
            listings = listings.filter((bg) => bg.title.toLowerCase().includes(title.toLowerCase()));
        }

        if (max_price != "") {
            listings = listings.filter((bg) => bg.price <= max_price);
        }

        if (genre != "") {
            listings = listings.filter((bg) => bg.genre === genre);
        }

        if (max_players != "") {
            listings = listings.filter((bg) => bg.numPlayers <= max_players);
        }

        if (location != "") {
            const opencage = require('opencage-api-client');

            const geo = await opencage.geocode({ key: 'ece176d4b3894699b2058fa884f5b210', q: location, limit: 1, countrycode: 'us' });
            var place = geo.results[0];
            console.log(place.geometry);
            var lat = place.geometry.lat;
            var lng = place.geometry.lng;
            listings = listings.filter( (bg) => (bg.lat <= (lat + (1/4))) && (bg.lat >= (lat - (1/4))) );
            listings = listings.filter( (bg) => (bg.lng <= (lng + (1/3))) && (bg.lat >= (lng - (1/3))) );
        }

        setBG(listings);
    }

    return (
        <div className={styles.landing}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
            {/* <QueryBar> */}
            <QueryBar handleSubmit={handleSubmit}
                handleGameNameQuery={handleGameNameQuery}
                handlePriceQuery={handlePriceQuery}
                handleGenreQuery={handleGenreQuery}
                handleMaxPlayersQuery={handleMaxPlayersQuery}
                handleLocationQuery={handleLocationQuery}>
            </QueryBar>

            <h1 className="mt-7 w-5/6 mx-auto text-3xl">Current Listings</h1>
            <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
                <tbody>
                    <tr className="text-left border-b-2 border-gray-300">
                        <th className="px-4 py-3">Game</th>
                        <th className="px-4 py-3">Genre</th>
                        <th className="px-4 py-3">Players</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3">Date Posted</th>
                        <th className="px-4 py-3"></th>
                    </tr>

                    {bg_filtered.map((boardgame) => {
                        return (
                            <tr className="bg-gray-100 border-b border-gray-200" key={boardgame._id}>
                                <td className="px-4 py-3">{boardgame.title}</td>
                                <td className="px-4 py-3">{boardgame.genre}</td>
                                <td className="px-4 py-3">{boardgame.numPlayers}</td>
                                <td className="px-4 py-3">${boardgame.price}</td>
                                <td className="px-4 py-3">{boardgame.postedAt.split('T')[0]}</td>
                                <td className="px-4 py-3">
                                    {/* <Link href={`/listings/${boardgame._id}`}><button className="bg-blue-500 p-2 rounded text-green-200">View</button></Link> */}
                                    <Link href={`/listings/${boardgame._id}`}><button className="bg-blue-500 p-2 rounded text-green-200 px-2">View</button></Link>
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
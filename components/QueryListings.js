import React, {Component, useState } from 'react';
import QueryBar from "../components/QueryBar";

const QueryListing = (props) => {

    const [title, setTitle] = useState("");
    const [max_price, setMaxPrice] = useState("");
    const listings = props.listings;
    const [bg_filtered, setBG] = useState(listings);
    
    const handleGameNameQuery = (e) => {
        setTitle(e.target.value);
    }

    const handlePriceQuery = (e) => {
        setMaxPrice(e.target.value);
    }
    
    const handleSubmit = (e) => {
        // prevent form from refreshing the page
        e.preventDefault();

        // reset bg_filtered state variable
        setBG(listings);

        if(title !== ""){
            const temp = bg_filtered.filter((bg) => bg.title === title);
            setBG(temp);
        }
        console.log(bg_filtered);
        
        if(max_price != ""){
            setBG(bg_filtered.filter((bg) => bg.price <= max_price));
        }
        console.log(bg_filtered);

    }

    return (
        <div>
            {/* <QueryBar> */}
            <QueryBar handleSubmit={handleSubmit} 
                    handleGameNameQuery={handleGameNameQuery} 
                    handlePriceQuery={handlePriceQuery}>
            </QueryBar>

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
                                    <button className="bg-blue-500 p-2 rounded text-green-200 pl-2">View</button>
                                </td>
                                <td className="px-4 py-3">
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
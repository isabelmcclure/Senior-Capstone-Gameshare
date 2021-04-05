import boardgame from "../models/boardgame";


function QueryListing(props) {
    return (
        <div>
            <h1 className="mt-7 w-5/6 mx-auto text-3xl">Current Listings</h1>
            <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
                <tbody>
                    <tr className="text-left border-b-2 border-gray-300">
                        <th className="px-4 py-3">Game</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3">Date Posted</th>
                        <th className="px-4 py-3"> </th>
                    </tr>

                    {props.listings.map((boardgame) => {
                        return (
                            <tr className="bg-gray-100 border-b border-gray-200">
                                <td className="px-4 py-3">{boardgame.title}</td>
                                <td className="px-4 py-3">${boardgame.price}</td>
                                <td className="px-4 py-3">{boardgame.postedAt}</td>
                                <td className="px-4 py-3">
                                    <button className="bg-blue-500 p-2 rounded text-green-200">View</button>
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
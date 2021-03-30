import Link from 'next/link'
const MyListings = (props) => {
    return (
        <div>
            <h1 className="mt-7 w-5/6 mx-auto text-3xl">My Listings</h1>
            <Link href="/newGame"><button className="m-5 mx-auto bg-blue-500 p-2 rounded text-green-200 px-2">New Listing</button></Link>
            <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
                <tr className="text-left border-b-2 border-gray-300">
                    <th className="px-4 py-3">Game</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">Quality</th>
                    <th className="px-4 py-3">Duration</th>
                    <th className="px-4 py-3">Actions</th>
                    <th className="px-4 py-3"> </th>
                </tr>
                {/*props.userData.boardgames.map is the right one, but i'm not pulling the correct user right now.*/}
                {props.userBoardgames.map((boardgame) => {
                    return (
                        <tr className="bg-gray-100 border-b border-gray-200">
                            <td className="px-4 py-3">{boardgame.title}</td>
                            <td className="px-4 py-3">${boardgame.price}</td>
                            <td className="px-4 py-3">{boardgame.quality}</td>
                            <td className="px-4 py-3">{boardgame.postedAt}</td>

                            <td className="px-4 py-3">
                                <Link href=""><button className="bg-blue-500 p-2 rounded text-green-200 px-2">Edit</button></Link>
                                <button className="bg-blue-500 p-2 rounded text-green-200">Delete</button>
                            </td>
                        </tr>
                    )

                })}

            </table>
        </div>
    );
}

export default MyListings;
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'

const MyListings = (props) => {

    const deleteListing = async event => {
        event.preventDefault();

        const res = await axios.delete(`http://localhost:3000/api/boardgames/${event.target.id.value}`)
        const path = "createListing/" + props.userData.email;
        console.log(res);
    }

    const router = useRouter();

    return (
        <div>
            <h1 className="mt-7 w-5/6 mx-auto text-3xl">My Listings</h1>

            <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
                <tbody>
                    <tr className="text-left border-b-2 border-gray-300">
                        <th className="px-4 py-3">Game</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3">Quality</th>
                        <th className="px-4 py-3">Duration</th>
                        <th className="px-4 py-3">Actions</th>
                    </tr>

                    {/*props.userData.boardgames.map is the right one, but i'm not pulling the correct user right now.*/}
                    {props.userBoardgames.map((boardgame) => {
                        return (
                            <tr className="bg-gray-100 border-b border-gray-200" key={boardgame.title}>
                                <td className="px-4 py-3">{boardgame.title}</td>
                                <td className="px-4 py-3">${boardgame.price}</td>
                                <td className="px-4 py-3">{boardgame.quality}</td>
                                <td className="px-4 py-3">{boardgame.postedAt}</td>

                                <td className="flex px-4 py-3">
                                    <Link href=""><button className="bg-blue-500 p-2 rounded text-green-200 px-2">View</button></Link>
                                    <Link href="/editListing"><button className="bg-blue-500 p-2 rounded text-green-200 px-2">Edit</button></Link>
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
                <button className="font-mono bg-blue-500 p-2 mr-2 rounded text-green-200" onClick={() => { router.push("newListing/") }}>Add New Listing</button>
            </div>
        </div>
    );
}

export default MyListings;
const MyListings = () => {
    return (
        <div>
            <h1 className="mt-7 w-5/6 mx-auto text-3xl">My Listings</h1>
            <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
                <tr class="text-left border-b-2 border-gray-300">
                    <th class="px-4 py-3">Game</th>
                    <th class="px-4 py-3">Price</th>
                    <th class="px-4 py-3">Date Posted</th>
                    <th class="px-4 py-3"> </th>
                </tr>
                
                <tr class="bg-gray-100 border-b border-gray-200">
                    <td class="px-4 py-3">Monopoly</td>
                    <td class="px-4 py-3">$40.00</td>
                    <td class="px-4 py-3">2/3/21</td>
                    <td class="px-4 py-3">
                        <button className="bg-blue-500 p-2 rounded text-green-200">Edit</button>
                    </td>
                </tr> 

                <tr class="bg-gray-100 border-b border-gray-200">
                    <td class="px-4 py-3">JavaScript Jigsaw</td>
                    <td class="px-4 py-3">$2.00</td>
                    <td class="px-4 py-3">4/2/2020</td>
                    <td class="px-4 py-3">
                        <button className="bg-blue-500 p-2 rounded text-green-200">Edit</button>
                    </td>
                </tr> 

                <tr class="bg-gray-100 border-b border-gray-200">
                    <td class="px-4 py-3">Booooootstrap</td>
                    <td class="px-4 py-3">$144.98</td>
                    <td class="px-4 py-3">3/2/2019</td>
                    <td class="px-4 py-3">
                        <button className="bg-blue-500 p-2 rounded text-green-200">Edit</button>
                    </td>
                </tr> 
            </table>
        </div>
    );
}
 
export default MyListings;
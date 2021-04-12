export default function EditListing() {

    const listingUpdate = async event => {
        event.preventDefault()

        const res = await axios.put(`http://localhost:3000/api/boardgames/`, {
            username: event.target.username.value,
            location: event.target.location.value
        })

        const result = res.json()
    }

    return (
        <div className="container w-1/2 mx-auto pt-4">
            <h1 className="uppercase text-3xl font-bold">Edit Game</h1>
            <form className="flex justify-center flex-col" onSubmit={editListing}>
                <div>
                    <label className="">Name of Game</label> <br />
                    <input type="text" id="game" name="game" className="border"></input>
                </div>
                <div>
                    <label className="">Description</label> <br />
                    <input type="text" id="description" name="description" className="border"></input>
                </div>
                <div>
                    <label className="">Quality</label> <br />
                    <input type="text" id="qualtiy" name="quality" className="border"></input>
                </div>
                <div>
                    <label className="" for="pictures">Pictures</label>
                    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-900 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-200 hover:text-blue-800">
                        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span class="mt-2 text-base leading-normal">Select a file</span>
                        <input type='file' class="hidden" />
                    </label>
                </div>
                <div>
                    <label className="">Price</label> <br />
                    <input type="text" id="price" name="price" className="border"></input>
                </div>
                <div>
                    <label className="">Start Date</label> <br />
                    <input type="text" id="startDate" name="startDate" className="border"></input>
                </div>
                <div>
                    <label className="">End Date</label> <br />
                    <input type="text" id="endDate" name="endDate" className="border"></input>
                </div>
                <div>
                    <label className="">Location</label> <br />
                    <input type="text" id="location" name="location" className="border"></input>
                </div>
                <input type="submit" value="Submit" className="" />
            </form>
        </div>
    )
}
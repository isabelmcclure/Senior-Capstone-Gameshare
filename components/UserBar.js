const UserBar = () => {
    return ( 
        <div className="max-w-6xl mx-auto bg-blue-200 mt-8 rounded-xl shadow-lg">
            <div className = "flex p-4 h-44">
            {/* UserBar elements */}
                <div className="border-blue-300 rounded flex justify-evenly content-center m-2 w-2/4">

                    {/* profile picture and use message */}
                    {/* <div className="border-blue-400 border-4 rounded-full"> */}
                    <img className="border-blue-400 border-4 rounded-full bg-blue-300 " src="https://randomuser.me/api/portraits/lego/2.jpg" alt="profile_picture"/>
                    {/* </div> */}

                    <div className="flex-col justify-evenly w-2/4  h-auto mt-5">
                        <h1 className = "font-mono font-extrabold text-blue-700 text-1xl">Welcome Back,</h1>
                        <h1 className = "font-mono font-extrabold text-blue-700 text-5xl mt-1">Keerat</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 divide-y divide-purple-300 w-2/4  h-auto">
                    <div>
                        <h1 className="font-mono inline-block font-extrabold text-blue-700 text-1xl">User Rating:</h1>
                        <p className="font-mono inline-block pl-2 ">4/5</p>
                    </div>
                    <div>
                        <h1 className="font-mono inline-block font-extrabold text-blue-700 text-1xl">Email:</h1>
                        <p className="font-mono inline-block pl-2 ">keeratiskrazy@gmail.com</p>
                    </div>
                    <div>
                        <h1 className="font-mono inline-block font-extrabold text-blue-700 text-1xl">Location:</h1>
                        <p className="font-mono inline-block pl-2">Austin, Texas</p>
                    </div>
                    <div className="pt-5">
                        <button className="font-mono bg-blue-500 p-2 mr-2 rounded text-green-200">Friends</button>
                        <button className="font-mono bg-blue-500 p-2 mr-2 rounded text-green-200">My Transactions</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
 
export default UserBar;
const UserBar = () => {
    return ( 
        <div className="max-w-6xl mx-auto bg-blue-200 mt-8 rounded-xl shadow-2xl">
            <div className = "flex p-4 h-44">
            {/* UserBar elements */}
            
            <div className="border-blue-300 rounded flex justify-evenly content-center m-2 w-2/4">

                {/* profile picture and use message */}
                {/* <div className="border-blue-400 border-4 rounded-full"> */}
                <img className="border-blue-400 border-4 rounded-full bg-blue-300 " src="public/profileicon.png" alt="profile_picture"/>
                {/* </div> */}

                <div className="flex-col justify-evenly w-2/4  h-auto mt-5">
                    <h1 className = "font-extrabold text-blue-700 text-1xl">Welcome Back,</h1>
                    <h1 className = "font-extrabold text-blue-700 text-5xl mt-1">Keerat</h1>
                </div>
            </div>

            {/* <div className="border-blue-400 border-4 flex-col justify-evenly w-2/4  h-auto">
                <h1>$20.00</h1>
                <h1>Earned in December</h1>
                <button className="border-blue-400 border-">Hello</button>
            </div> */}






            </div>
        </div>
    )
}
 
export default UserBar;
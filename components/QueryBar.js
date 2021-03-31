const QueryBar = () => {
    return (
        <div className= "max-w-3xl mx-auto pt-4">
            <form className = "flex justify-center bg-blue-300 p-4 rounded-full shadow-lg" method="get">
                <label className="p-3">
                    <div className = "font-mono font-extrabold text-blue-700 text-xl text-center">Name:</div>
                    <input className= "rounded-full p-1" type="text" name="name" placeholder="Monopoly" required/>
                </label>

                <label className="p-3">
                    <div className="font-mono font-extrabold text-blue-700 text-xl text-center">Location:</div>
                    <input className= "rounded-full p-1" type="text" name="location" placeholder="Austin" required/>
                </label>

                <label className="p-3">
                    <div className="font-mono font-extrabold text-blue-700 text-xl text-center">Duration:</div>
                    <input className= "rounded-full p-1" type="date" name="date" required/>
                </label>

                <input className="rounded-full ml-6 py-3 px-6" type="submit" value="Submit"/>
            </form>
        </div>
    );
}
 
export default QueryBar;
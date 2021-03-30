const QueryBar = () => {
    return (
        <div className= "max-w-2xl mx-auto pt-4">
            <form className = "flex justify-center bg-blue-400 p-4" method="get">
                <label>
                    <div>Name:</div>
                    <input type="text" name="name" placeholder="Monopoly"/>
                </label>

                <label>
                    <div>Location:</div>
                    <input type="text" name="location" placeholder="Austin"/>
                </label>

                <label>
                    <div>Duration:</div>
                    <input type="date" name="date"/>
                </label>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
 
export default QueryBar;
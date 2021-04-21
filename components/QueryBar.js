import styles from '../styles/Home.module.css'
const QueryBar = (props) => {
    return (
        <div className={styles.landing}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <div className= "w-max mx-auto pt-4">
        <form className="flex justify-center bg-blue-300 p-4 rounded-full shadow-lg" onSubmit={props.handleSubmit}>
            <label className="p-3">
                <div className = "font-extrabold text-blue-700 text-xl text-center">Name:</div>
                <input className= "rounded-full p-1" type="text" name="game_name" id="game_name" placeholder="Monopoly" onChange={props.handleGameNameQuery}></input>
            </label>

            <label className="p-3">
                <div className="font-extrabold text-blue-700 text-xl text-center">Genre:</div>
                <input className= "rounded-full p-1" type="text" name="location" id="location" placeholder="Strategy" onChange={props.handleGenreQuery}></input>
            </label>

            <label className="p-3">
                <div className="font-extrabold text-blue-700 text-xl text-center">Location:</div>
                <input className= "rounded-full p-1" type="text" name="price" id="price" placeholder="College Station" onChange={props.handleLocationQuery}></input>
            </label>

            <label className="p-3">
                <div className="font-extrabold text-blue-700 text-xl text-center">Max Price:</div>
                <input className= "rounded-full p-1" type="number" min="0" name="price" id="price" placeholder="$1" onChange={props.handlePriceQuery}></input>
            </label>

            <label className="p-3">
                <div className="font-extrabold text-blue-700 text-xl text-center">Max Players:</div>
                <input className= "rounded-full p-1" type="number" min="0" name="price" id="price" placeholder="1" onChange={props.handleMaxPlayersQuery}></input>
            </label>

            <input className="rounded-full ml-6 py-3 px-6" type="submit" value="Submit"/>
        </form>
    </div>
    </div>
    );
}
 
export default QueryBar;
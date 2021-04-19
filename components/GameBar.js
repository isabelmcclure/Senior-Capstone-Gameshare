import Link from 'next/link'
import styles from '../styles/Home.module.css'

const GameBar = (props) => {
    return (
       <div className={styles.landing}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Monserrat"/>
        <div className="max-w-6xl h-auto mx-auto bg-blue-200 mt-8 rounded-xl shadow-lg">
            <div className="flex p-4 h-auto">
                {/* UserBar elements */}
                <div className="border-blue-300 rounded flex justify-evenly content-center m-2 w-2/4">

                    <div className="flex-col justify-evenly w-2/4 h-auto mt-5">
                        <h1 className="font-mono font-extrabold text-blue-700 text-3xl mt-1">{props.boardgame.title}</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 divide-y divide-purple-300 w-2/4 h-auto">
                    <div>
                        <h1 className="font-mono inline-block font-extrabold text-blue-700 text-1xl">Quality:</h1>
                        <p className="font-mono inline-block pl-2 ">{props.boardgame.quality}</p>
                    </div>
                    <div>
                        <h1 className="font-mono inline-block font-extrabold text-blue-700 text-1xl">Price:</h1>
                        <p className="font-mono inline-block pl-2 ">{props.boardgame.price}</p>
                    </div>
                    <div>
                        <h1 className="font-mono inline-block font-extrabold text-blue-700 text-1xl">Location:</h1>
                        <p className="font-mono inline-block pl-2">{props.boardgame.location}</p>
                    </div>
                    <div>
                        <h1 className="font-mono inline-block font-extrabold text-blue-700 text-1xl">Description:</h1>
                        <p className="font-mono inline-block pl-2">{props.boardgame.description}</p>
                    </div>
                    <div className="pt-5">
                        {/*<button className="font-mono bg-blue-500 p-2 mr-2 rounded text-white">Friends</button>*/}
                        <button className="font-mono bg-blue-500 p-2 mr-2 rounded text-white">Rent</button>
                    </div>
                </div>

            </div>
        </div>
       </div>
    )
}

export default GameBar;
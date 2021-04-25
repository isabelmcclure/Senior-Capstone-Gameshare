import QueryBar from "../components/QueryBar";
import QueryListing from "../components/QueryListings";
import axios from 'axios'
import dbConnect from '../util/dbConnect'
import Boardgame from '../models/boardgame'
import Head from 'next/head'

function Listings({ boardgames }) {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
                <title>GameShare</title>
                <link rel="icon" href="/GS.png" />
            </Head>
            <QueryListing listings={boardgames}></QueryListing>
        </div>
    );
}


export async function getServerSideProps(context) {
    dbConnect();
    const dbres = await Boardgame.find()
    //const res = await axios.get('/api/boardgames')
    //console.log(JSON.parse(JSON.stringify(dbres)))
    //console.log(dbres)


    const boardgames = JSON.parse(JSON.stringify(dbres));
    //onst boardgames = res.data.data;


    return { props: { boardgames } }
}

export default Listings;

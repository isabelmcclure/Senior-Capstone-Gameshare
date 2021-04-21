import QueryBar from "../components/QueryBar";
import QueryListing from "../components/QueryListings";
import axios from 'axios'
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


export async function getStaticProps(context) {
    const res = await axios.get('/api/boardgames');

    const boardgames = res.data.data;
    // console.log(boardgames)

    return { props: { boardgames } }
}

export default Listings;

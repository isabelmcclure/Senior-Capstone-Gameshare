import QueryBar from "../components/QueryBar";
import QueryListing from "../components/QueryListings";
import axios from 'axios'

function Listings({ boardgames }) {
    return (
        <div>
            <QueryBar></QueryBar>
            <QueryListing listings={boardgames}></QueryListing>
        </div>
    );
}


export async function getStaticProps(context) {
    const res = await axios.get('http://localhost:3000/api/boardgames');

    const boardgames = res.data.data;
    //console.log(boardgames)

    return { props: { boardgames } }
}

export default Listings;
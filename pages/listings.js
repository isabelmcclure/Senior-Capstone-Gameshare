import { useRouter } from "next/router";
import QueryBar from "../components/QueryBar";
import QueryListing from "../components/QueryListings";
//import dbConnect from "../util/dbConnect";

//var Boardgame = require("../models/boardgame")
//dbConnect();

export default function Listings() {
    const router = useRouter();
    const params = new URLSearchParams(router.asPath);
    const opencage = require('opencage-api-client');

    opencage.geocode({q: params.get('location'), limit: 1, countrycode: 'us'}).then(data => {
    //console.log(JSON.stringify(data));
    if (data.status.code === 200) {
        if (data.results.length > 0) {
        var place = data.results[0];
        //console.log(place.formatted);
        console.log(place.geometry);
        //console.log(place.annotations.timezone.name);
        }
    } else if (data.status.code === 402) {
        console.log('hit free trial daily limit');
        console.log('become a customer: https://opencagedata.com/pricing'); 
    } else {
        // other possible response codes:
        // https://opencagedata.com/api#codes
        console.log('error', data.status.message);
    }
    }).catch(error => {
    console.log('error', error.message);
    });
    console.log(router.asPath);
    console.log(params.get('location'));

    return (
        
        <div>
            <QueryBar></QueryBar>
            <QueryListing></QueryListing>
        </div>
    );
}

export async function getStaticProps(context) {
    const rp = await fetch('http://api.plos.org/search?q=title:DNA')
    
    return { props: {  } }
}
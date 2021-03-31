// import useAuth from '../hooks/useAuth'
import Head from 'next/head'
import MyListings from "../components/MyListings";
import UserBar from "../components/UserBar";

export default function Dashboard() {
    // const { user, loading } = useAuth();

    return (
         // <>
        //     <h1>Dashboard</h1>
        //     {loading ? "Loading..." : user.email}
        // </>
        <div>
            <Head>
            <title>GameShare</title>
            <link rel="icon" href="/GS.png" />
            </Head>
        
            <UserBar></UserBar>
            <MyListings></MyListings>
        </div>

    )
}



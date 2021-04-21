import useAuth from '../hooks/useAuth'
import Error from 'next/error'
import MyListings from "../components/MyListings";
import UserBar from "../components/UserBar";
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Dashboard() {
    const { data, loading, error } = useAuth();

    //console.log(data)
    if (!data) {
        return <Error statusCode={404} />
    }


    return (
        // <>
        //     <h1>Dashboard</h1>
        //     {loading ? "Loading..." : user.email}
        // </>
        <div className={styles.landing}>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
                <title>GameShare</title>
                <link rel="icon" href="/GS.png" />
            </Head>

            <UserBar userData={data.userD}></UserBar>
            <MyListings userBoardgames={data.userB}></MyListings>
        </div>

    )
}



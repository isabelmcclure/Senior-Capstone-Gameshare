import useAuth from '../hooks/useAuth'
import Error from 'next/error'
import MyListings from "../components/MyListings";
import UserBar from "../components/UserBar";

export default function Dashboard() {
    const { user, userData, userBoardgames, loading } = useAuth();

    console.log(user);

    if (!user) {
        return <Error statusCode={404} />
    }


    return (
        // <>
        //     <h1>Dashboard</h1>
        //     {loading ? "Loading..." : user.email}
        // </>
        <div>
            {/*<UserBar userData={ }></UserBar>
            <MyListings userBoardgames={ }></MyListings>*/}
        </div>

    )
}



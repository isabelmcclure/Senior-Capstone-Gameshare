// import useAuth from '../hooks/useAuth'

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
            <UserBar></UserBar>
            <MyListings></MyListings>
        </div>

    )
}



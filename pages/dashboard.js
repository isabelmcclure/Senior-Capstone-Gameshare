// import useAuth from '../hooks/useAuth'

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
        </div>

    )
}



import useAuth from '../hooks/useAuth'
import Error from 'next/error'


export default function Dashboard() {
    const { user, loading } = useAuth();

    if (!user) {
        return <Error statusCode={404} />
    }

    return (
        <>
            <h1>Dashboard</h1>
            {loading ? "Loading..." : user.email}
        </>
    )
}

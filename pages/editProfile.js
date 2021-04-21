import EditProfileFields from '../components/EditProfileFields'
import useAuth from '../hooks/useAuth'
import Error from 'next/error'
import Head from 'next/head'

export default function EditProfile(props) {
    const { data, loading, error } = useAuth();

    //console.log(data)
    if (!data) {
        return <Error statusCode={404} />
    }
    return (

        <div>
            <Head>
                <title>GameShare</title>
                <link rel="icon" href="/GS.png" />
            </Head>
            <EditProfileFields userData={data.userD}></EditProfileFields>
        </div>

    )
}
import EditProfileFields from '../components/EditProfileFields'
import useAuth from '../hooks/useAuth'
import Error from 'next/error'

export default function EditProfile(props) {
    const { data, loading, error } = useAuth();

    //console.log(data)
    if (!data) {
        return <Error statusCode={404} />
    }
    return (

        <div>
            <EditProfileFields userData={data.userD}></EditProfileFields>
        </div>

    )
}
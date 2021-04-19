import axios from 'axios'
import { useRouter } from 'next/router'

export default function EditProfileFields(props) {
    const router = useRouter();


    //console.log(props)
    const handleSubmit = async (event) => {
        event.preventDefault()



        const res = await axios.put(`http://localhost:3000/api/users/${props.userData._id}`, {
            username: event.target.username.value,
            location: event.target.location.value
        })

        const result = res.data.data
        console.log(result)
        router.push('dashboard')
    }



    return (
        <div className="container w-1/2 mx-auto pt-4">
            <h1 className="uppercase text-3xl font-bold">Edit Profile</h1>
            <form className="grid justify-center" onSubmit={handleSubmit}>
                <div>
                    <label className="">Username</label> <br />
                    <input type="text" id="username" name="username" className="border mb-4"></input>
                </div>
                <div>
                    <label className="">Location</label> <br />
                    <input type="text" id="location" name="location" className="border mb-4"></input>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
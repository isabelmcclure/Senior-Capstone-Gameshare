import axios from 'axios'
import { useRouter } from 'next/router'

export default function EditProfileFields(props) {
    const router = useRouter();


    //console.log(props)
    const handleSubmit = async (event) => {
        event.preventDefault()



        const res = await axios.put(`/api/users/${props.userData._id}`, {
            username: event.target.username.value,
            location: event.target.location.value
        })

        const result = res.data.data
        console.log(result) 
        router.push('dashboard')
    }



    return (
        <div>
        <h1 className="px-5 py-5 mb-2 uppercase font-bold text-3xl text-grey-darkest">Edit Profile</h1>
        <div className="w-1/2 px-12">
            <form className="mb-6" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Username</label>
                    <input className="border py-2 px-3 text-grey-darkest" type="text" id="username" name="username"></input>
                </div>
                <div className="flex flex-col mb-4 ">
                    <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Location</label>
                    <input className="border py-2 px-3 text-grey-darkest" type="text" id="location" name="location"></input>
                </div>
                <button className="block bg-green-500 hover:bg-green-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
}
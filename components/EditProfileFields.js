import axios from 'axios'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'

export default function EditProfileFields(props) {
    const router = useRouter();
    const { data, loading, error } = useAuth();

    const[imageFile, setImageFile] = useState("")
    const[imageURL, setImageURL] = useState(data.userD.img)


    const handleImageFileChange = async (event) => {
        const files = event.target.files[0];
        setImageFile(files.name)
        const data = new FormData();
        data.append('file', files);
        data.append('upload_preset', 'GameShareImages')
    
        const res = await fetch('https://api.cloudinary.com/v1_1/dyd5yuvop/image/upload', {
          method: 'POST',
          body: data
        });
    
        const file = await res.json();
        console.log("cloudinary api")
        console.log(file)
        setImageURL(file.secure_url)
      }


    //console.log(props)
    const handleSubmit = async (event) => {
        event.preventDefault()



        /*const res = await axios.put(`/api/users/${props.userData._id}`, {
            username: event.target.username.value,
            location: event.target.location.value,
            img: imageURL
        })*/

        const editData = JSON.stringify({
            username: event.target.username.value,
            location: event.target.location.value,
            img: imageURL
          })

        const res = await fetch(`/api/users/${props.userData._id}`, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json, text/plain, */',
              'Content-Type': 'application/json'
            },
            body: editData
          });
        router.push('dashboard')
    }



    return (
        <div className={styles.landing}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <h1 className="px-5 py-5 mb-2 uppercase font-bold text-3xl text-grey-darkest">Edit Profile</h1>
        <div className="w-1/2 px-12">
            <form className="mb-6" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Username</label>
                    <input className="border py-2 px-3 text-grey-darkest" type="text" id="username" name="username"></input>
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="pictures">Upload Profile Image</label>
                    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-900 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-200 hover:text-blue-800">
                        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span class="mt-2 text-base leading-normal">Select a file</span>
                        <input type='file' class="hidden" onChange={handleImageFileChange} />
                    </label>
            {imageFile}
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
<<<<<<< HEAD
import { useRouter } from 'next/router'
import { Magic } from 'magic-sdk'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
=======
import LogInSignUp from '../components/LogInSignUp.js'
>>>>>>> main

export default function Login() {
  

    return (
<<<<<<< HEAD
        <div className= {styles.login}>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
                <title>GameShare</title>
                <link rel="icon" href="/GS.png" />
            </Head>
            
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" />
                    <button class="bg-transparent hover:bg-black-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-white-500 rounded">
                    Log in
                    </button>
                </form>
        
=======
        <div>
            <LogInSignUp type="Log In"></LogInSignUp>
>>>>>>> main
        </div>
    )
}
import { useRouter } from 'next/router'
import { Magic } from 'magic-sdk'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Login() {
    const router = useRouter()
    const handleSubmit = async (event) => {
        event.preventDefault()

        const { elements } = event.target;

        // the magic code
        const did = await new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY)
            .auth
            .loginWithMagicLink({ email: elements.email.value })

        // Once we have the did from magic, login with our own API
        const authRequest = await fetch('/api/login', {
            method: 'POST',
            headers: { Authorization: `Bearer ${did}` }
        })

        if (authRequest.ok) {
            // We successfully logged in, our API
            // set authorization cookies and now we
            // can redirect to the dashboard!
            router.push('/dashboard')
        } else {
            throw new Error(await authRequest.text())
        }
    }

    return (
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
        
        </div>

    )
}
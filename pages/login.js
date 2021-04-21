import LogInSignUp from '../components/LogInSignUp.js'
import Head from 'next/head'

export default function Login() {
  

    return (
        <div>
            <Head>
                <title>GameShare</title>
                <link rel="icon" href="/GS.png" />
            </Head>
            <LogInSignUp type="Log In"></LogInSignUp>
        </div>
    )
}
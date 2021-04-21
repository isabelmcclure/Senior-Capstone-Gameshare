import LogInSignUp from '../components/LogInSignUp'
import Head from 'next/head'

export default function SignUp() {

    return (
        <div>
            <Head>
                <title>GameShare</title>
                <link rel="icon" href="/GS.png" />
            </Head>
            <LogInSignUp type="Sign Up"></LogInSignUp>
        </div>

    )
}
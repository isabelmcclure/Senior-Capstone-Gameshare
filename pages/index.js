import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import dbConnect from '../util/dbConnect'
import DateRangePicker from '../components/DateRangePicker'
import QueryBar from "../components/QueryBar"

export default function Home() {
  return (
    <div className={styles.landing}>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <title>GameShare</title>
        <link rel="icon" href="/GS.png" />
      </Head>
      <header class="bg-blue-600">
      <section class="flex items-center justify-center" style={{height: '500px' }}>
            <div class="text-center">
                <h2 class="mt-6 text-3xl font-bold text-white md:text-5xl">Find board games, <br /> 
                anywhere.</h2>
    
                <div class="flex justify-center mt-8">
                  {/* <QueryBar></QueryBar> */}
                    <div className= "w-max mx-auto pt-4">
                        <div>
                            <Link href="/listings">
                                <button className="bg-indigo-400 p-5 rounded-full text-white font-bold border-purple-600 shadow-xl transition duration-700 ease-in-out tracking-wide
                                transform hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-blue-600">
                                    Click here to get started
                                </button>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </header>
      <section class="bg-white">
        <div class="max-w-5xl px-6 py-16 mx-auto">
            <div class="items-center md:flex md:space-x-6">
                <div class="md:w-1/2">
                    <h3 class="text-2xl font-semibold text-gray-800">Want to rent out your games instead?</h3>
                    <p class="max-w-md mt-4 mb-4 text-gray-600">GameShare gives you the opportunity to find board games nearby,
                    but that's not all you can do. As a board game owner, you can find games to rent AND 
                    make a profit by renting out your own.</p>
                    <a class="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-blue-600 rounded hover:bg-blue-500"
                        href="/login">Log In or Sign Up</a>

                </div>
    
                <div class="mt-8 md:mt-0 md:w-1/2">
                    <div class="flex items-center justify-center">
                        <div class="max-w-md">
                            <img src="/GameShare.png" style={{height: '300px', width: '300px'}}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    
  )
}
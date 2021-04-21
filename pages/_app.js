import Layout from '../components/Layout'
import '../styles/globals.css'
import axios from 'axios'

<<<<<<< HEAD
axios.defaults.baseURL = 'http://gameshare.vercel.app';
=======
axios.defaults.baseURL = 'http://localhost:3000/';
>>>>>>> ae94142fe1e624447fac4f5772eedb4b05bab9f2

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

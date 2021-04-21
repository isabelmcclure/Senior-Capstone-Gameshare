import Layout from '../components/Layout'
import '../styles/globals.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://gameshare-live.vercel.app';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

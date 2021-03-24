import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dbConnect from '../util/dbConnect'

export default function Home() {
  return (
    <div className={styles.landing}>
      <Head>
        <title>GameShare</title>
        <link rel="icon" href="/GS.png" />
      </Head>

      <body>
        <h1>GameShare</h1>
      </body>
    </div>
  )
}

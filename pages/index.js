import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import DatePicker from 'react-datepicker'
import dbConnect from '../util/dbConnect'
import DateRangePicker from '../components/DateRangePicker'

export default function Home() {
  return (
    <div className={styles.landing}>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <title>GameShare</title>
        <link rel="icon" href="/GS.png" />
      </Head>
      <body>
        <div className={styles.landingInputs}>
          <label>Where?</label>
          <input type="text" style={{ width: '200px', padding: '10px' }} placeholder="Enter an address, city or zip..." ></input>
        </div>
        <div>
          <DateRangePicker />
        </div>
        <div className={styles.search}>
          <button class="bg-transparent hover:bg-black-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-white-500 rounded">
            Search
        </button>
        </div>
      </body>
    </div>
  )
}
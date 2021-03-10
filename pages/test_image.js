import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dbConnect from '../util/dbConnect'

export default function Home() {
  return (
    <form action='/api/images' method="post" enctype="multipart/form-data">
      <input type='file' name='image' />
  </form>
  )
}

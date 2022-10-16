import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className={styles.container}>
        <h1>Hello world</h1>
      </div>
    </div>
  )
}

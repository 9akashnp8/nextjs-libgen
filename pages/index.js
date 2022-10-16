import Head from 'next/head';
import Navbar from '../components/Navbar';
import HomeMain from '../components/HomeMain';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Next Libgen</title>
      </Head>

      <Navbar/>
      <HomeMain/>
    </div>
  )
}

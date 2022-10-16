import Head from 'next/head';
import Navbar from '../components/Navbar';
import HomeMain from '../components/HomeMain';

export default function Home() {
  return (
    <div className='min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-600 to-slate-900'>
      <div className='container'>
        <Head>
          <title>Next Libgen</title>
        </Head>

        <Navbar/>
        <HomeMain/>
      </div>
    </div>
  )
}

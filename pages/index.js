import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroTitle from '../components/HeroTitle';
import SearchBar from '../components/SearchBar';
import SearchButton from '../components/SearchButton';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Next Libgen</title>
      </Head>

      <Navbar/>
      <HeroTitle/>
      <SearchBar/>
      <SearchButton/>
    </div>
  )
}

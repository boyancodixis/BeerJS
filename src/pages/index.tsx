// import Head from 'next/head';
// import Image from 'next/image';
// import { Inter } from 'next/font/google';
// import styles from '@/styles/Home.module.css';
// import Beers from './components/Beers';
import Link from 'next/Link';
import Head from 'next/head';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const Home = () => (
  <div className={roboto.className}>
    <div className="landing">
      <ul className="menu">
        <li className="beers_menu">
          <Link href="/beers">Beers</Link>
        </li>
        <li>
          <Link href="/my-account">My Account</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Home;

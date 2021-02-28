import Head from 'next/head';
import { FaFacebookSquare, FaInstagram, FaPinterest } from "react-icons/fa";
import Countdown from '../components/Countdown';
import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>We're lauching soon</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>We're lauching soon</h1>

        <Countdown />
      </main>

      <footer className={styles.footer}>
        <div className={styles.logos}>
          <a
            href="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className={styles.logo} />
          </a>
          <a
            href="http://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterest className={styles.logo} />
          </a>
          <a
            href="http://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.logo} />
          </a>
        </div>

        <div className={styles.attribution}>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://www.linkedin.com/in/paulalopessilva21/" target="_blank">Paula Lopes Silva</a>.
        </div>
      </footer>

    </div>
  )
}

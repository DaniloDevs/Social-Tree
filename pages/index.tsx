import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Social Tree | Danilo Romão</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.app}>
        <header className={styles.header}>
          <img src="https://avatars.githubusercontent.com/u/106762799?v=4" alt="" />
          <div>
            <span> 🎉| 2007</span>
            <h1>
              Danilo Romão
            </h1>
            <h3>
              My Profiles
            </h3>
          </div>
        </header>

        <main className={styles.main}>
          <div>
            <a href="https://www.instagram.com/https._.danilinho/" target="_blank" rel='noreferrer'>
              <h2>Instagram</h2>
            </a>
            <a href="https://twitter.com/htps_danilo" target="_blank" rel='noreferrer'>
              <h2>Twitter</h2>
            </a>
            <a href="https://github.com/DaniloDevs" target="_blank" rel='noreferrer'>
              <h2>Github</h2>
            </a>
            <a href="https://open.spotify.com/user/31i2ahcqqhu5wcpcq3ficwjxub3y" target="_blank" rel='noreferrer'>
              <h2>Spotify</h2>
            </a>
            <a href="https://vsco.co/https-danilo/gallery" target="_blank" rel='noreferrer'>
              <h2>vsco.co</h2>
            </a>
            <a href="https://www.wattpad.com/user/DaniloSw" target="_blank" rel='noreferrer'>
              <h2>Wattpad</h2>
            </a>
            <a href="https://www.skoob.com.br/share/user/DaniloSw" target="_blank" rel='noreferrer'>
              <h2>Skoob</h2>
            </a>
            <a href="https://myanimelist.net/profile/_SW_" target="_blank" rel='noreferrer'>
              <h2>My anime list</h2>
            </a>
          </div>

        </main>
      </div>
    </>
  )
}



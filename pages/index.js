import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a> Template
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/jparasha"
          target="_blank"
          rel="noopener noreferrer"
        >
          @jparasha
        </a>
      </footer>
    </div>
  )
}

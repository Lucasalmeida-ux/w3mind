import Head from 'next/head'
import Layout from './components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>W3Mind - Desenvolvimento de sites</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container">
          <h1>index</h1>
        </div>
      </Layout>
    </div>
  )
}

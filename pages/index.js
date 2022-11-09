import Head from 'next/head'
import App from '../components/driverApp'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jay Gurjar Porfolio</title>
        <meta name="description" content="Porfolio website by Jay Gurjar" />
        <link rel="icon" href="/code.png" />
      </Head>

      <main className=' bg-white px-10 '>
        <App/>
      </main>
    </div>
  )
}

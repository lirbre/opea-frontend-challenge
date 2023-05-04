import Image from 'next/image'
import { Jost } from 'next/font/google'
import Head from 'next/head'

const jost = Jost({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <title>Frontend Challenge - Opea</title>
        <meta name="description" content="A CRUD for Opea Frontend Challenge" />
      </Head>
    </main>
  )
}

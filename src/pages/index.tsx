import { Jost } from 'next/font/google'
import Head from 'next/head'
import { CompanyList } from '@/components/CompanyList'
import { CompanyControls } from '@/components/CompanyControls'
import { CompanyAPI } from '@/schemas/company'

const jost = Jost({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <title>Frontend Challenge - Opea</title>
        <meta name="description" content="A CRUD for Opea Frontend Challenge" />
      </Head>
      <CompanyControls />
      <CompanyList />
    </main>
  )
}

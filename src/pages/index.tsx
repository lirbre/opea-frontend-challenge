import { Jost } from 'next/font/google'
import Head from 'next/head'
import { CompanyList } from '@/components/CompanyList'
import { CompanyControls } from '@/components/CompanyControls'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { companyListKey } from '@/hooks/useCompany'
import { CompanyAPI } from '@/schemas/company'

const jost = Jost({ subsets: ['latin'] })

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    [...companyListKey, { search: '' }],
    () =>
      fetch(`https://homolog.planetasec.com.br/prova/front/api/clients`).then(
        async (res) => {
          const data = await res.json()

          const info = CompanyAPI.safeParse(data)

          return info.success ? info.data : []
        }
      ),
    {
      cacheTime: 6000,
      staleTime: 6000
    }
  )

  return {
    props: { dehydratedState: dehydrate(queryClient) }
  }
}

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

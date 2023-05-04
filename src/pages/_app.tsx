import { type AppType } from 'next/dist/shared/lib/utils'

import '@/styles/globals.css'
import {
  type DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Navbar } from '@/components/Navbar'
import { EditModal } from '@/components/modal/Edit'
import { CreateModal } from '@/components/modal/Create'

const queryClient = new QueryClient()

const MyApp: AppType<{ dehydratedState: DehydratedState }> = ({
  Component,
  pageProps
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Navbar />
        <Component {...pageProps} />
        <EditModal />
        <CreateModal />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp

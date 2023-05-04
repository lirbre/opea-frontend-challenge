import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'
import { CompanyAPI, CompanyForm } from '@/schemas/company'
import { json } from 'stream/consumers'

export const useCompany = () => {
  const queryClient = useQueryClient()

  const {
    data: companyList,
    isLoading,
    isError
  } = useQuery(['company-list'], () =>
    fetch('https://homolog.planetasec.com.br/prova/front/api/clients').then(async (res) => {
        const data = await res.json()

        const info = CompanyAPI.safeParse(data)

        return info.success ? info.data : []
    })
  )

  const { mutate: deleteCompany } = useMutation(
    (id: string) =>
      fetch('https://homolog.planetasec.com.br/prova/front/api/clients', {
        body: JSON.stringify({ id }),
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['company-list'])
      }
    }
  )

  const { mutate: createCompany } = useMutation(
    (body: z.infer<typeof CompanyForm>) =>
      fetch('https://homolog.planetasec.com.br/prova/front/api/clients', {
        body: JSON.stringify({ ...body }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['company-list'])
      }
    }
  )

  const { mutate: updateCompany } = useMutation(
    (body: z.infer<typeof CompanyForm>) =>
      fetch('https://homolog.planetasec.com.br/prova/front/api/clients', {
        body: JSON.stringify({ ...body }),
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        }
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['company-list'])
      }
    }
  )

  return {
    companyList,
    isError,
    isLoading,
    deleteCompany,
    createCompany,
    updateCompany
  }
}

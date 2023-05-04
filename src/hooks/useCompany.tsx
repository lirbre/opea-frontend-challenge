import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'
import { CompanyAPI, CompanyForm } from '@/schemas/company'
import { useRouter } from 'next/router'
import { toast } from 'sonner'
import { useMemo } from 'react'

export const companyListKey = ['company-list']
export const limit = 12

export const useCompany = () => {
  const queryClient = useQueryClient()

  const { query } = useRouter()

  const {
    data: companyList,
    isLoading,
    isError
  } = useQuery(
    [...companyListKey, { search: query.search ?? '' }],
    () =>
      fetch(
        `https://homolog.planetasec.com.br/prova/front/api/clients${
          query.search ? '?text=' + query.search : ''
        }`
      ).then(async (res) => {
        const data = await res.json()

        const info = CompanyAPI.safeParse(data)

        return info.success ? info.data : []
      }),
    {
      cacheTime: 6000,
      staleTime: 6000
    }
  )

  const { mutate: deleteCompany } = useMutation(
    (id: string) =>
      fetch('https://homolog.planetasec.com.br/prova/front/api/clients/' + id, {
        body: JSON.stringify({ id }),
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(companyListKey)
        toast.success('Empresa deletada com sucesso.')
      },
      onError: () => {
        toast.error(
          'Tivemos problema ao deletar sua empresa, por favor tente novamente.'
        )
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
        queryClient.invalidateQueries(companyListKey)
      }
    }
  )

  const { mutate: updateCompany } = useMutation(
    ({ body, id }: { body: z.infer<typeof CompanyForm>; id: string }) =>
      fetch('https://homolog.planetasec.com.br/prova/front/api/clients/' + id, {
        body: JSON.stringify({ ...body }),
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(companyListKey)
      }
    }
  )

  const paginatedData = useMemo(
    () =>
      companyList?.slice(
        (+String(query?.page ?? 1) - 1) * limit,
        +String(query?.page ?? 1) * limit
      ),
    [companyList, query.page]
  )

  const totalPages = useMemo(
    () => Math.ceil((companyList?.length ?? 1) / limit),
    [companyList]
  )

  return {
    companyList,
    paginatedData,
    totalPages,
    isError,
    isLoading,
    deleteCompany,
    createCompany,
    updateCompany
  }
}

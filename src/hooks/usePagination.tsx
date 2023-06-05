import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { useCompany } from './useCompany'

export const usePagination = () => {
  const { totalPages } = useCompany()

  const { query, asPath, replace, pathname } = useRouter()

  const previousPage = () => {
    const queryParams = new URLSearchParams(window.location.search)

    if (+String(query?.page ?? 1) - 1 === 1) {
      queryParams.delete('page')
    } else {
      queryParams.set('page', String(+String(query?.page ?? 1) - 1))
    }

    replace(`${pathname}?${queryParams.toString()}`)
  }

  const nextPage = () => {
    const queryParams = new URLSearchParams(window.location.search)

    if (+String(query?.page ?? 1) === totalPages) {
      return
    } else {
      queryParams.set('page', String(+String(query?.page ?? 1) + 1))
    }

    replace(`${pathname}?${queryParams.toString()}`)
  }

  const hasNextPage = useMemo(
    () => +String(query.page ?? 1) === totalPages || totalPages === 0,
    [totalPages, query]
  )

  const hasPreviousPage = useMemo(
    () => +String(query?.page ?? 1) === 1,
    [query]
  )

  useEffect(() => {
    if (totalPages === 0) return

    if (+String(query.page ?? 1) > totalPages) {
      replace({ href: asPath, query: { ...query, page: totalPages } })
      return
    }
    if (+String(query.page ?? 1) < 1) {
      replace({ href: asPath, query: { ...query, page: 1 } })
      return
    }
  }, [query, replace, asPath, totalPages])

  return {
    nextPage,
    previousPage,
    page: query?.page ?? 1,
    hasNextPage,
    hasPreviousPage
  }
}

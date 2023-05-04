import { useCompany } from '@/hooks/useCompany'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const CompanyPagination = () => {
  const { totalPages } = useCompany()

  const { query, asPath, replace } = useRouter()

  useEffect(() => {
    if (+String(query.page ?? 1) > totalPages) {
      replace({ href: asPath, query: { ...query, page: 1 } })
      return
    }
    if (+String(query.page ?? 1) < 1) {
      replace({ href: asPath, query: { ...query, page: 1 } })
      return
    }
  }, [query, replace, asPath, totalPages])

  return (
    <div className="flex items-center justify-center gap-1.5 rounded-opea border-2 border-gray-input bg-white-brand p-0.5 px-2.5">
      <button
        onClick={() =>
          replace({
            href: asPath,
            query: { ...query, page: +String(query.page ?? 1) - 1 }
          })
        }
        className="enabled:text-wine-brand enabled:hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={+String(query.page ?? 1) === 1}
      >
        &#x2190;
      </button>
      <div className="h-8 w-10 px-3 py-1 text-center font-semibold hover:opacity-90">
        {query.page ?? 1}
      </div>
      <button
        onClick={() =>
          replace({
            href: asPath,
            query: { ...query, page: +String(query.page ?? 1) + 1 }
          })
        }
        className="enabled:text-wine-brand enabled:hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={+String(query.page ?? 1) === totalPages}
      >
        &#x2192;
      </button>
    </div>
  )
}

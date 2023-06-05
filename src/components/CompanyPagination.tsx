import { useCompany } from '@/hooks/useCompany'
import { usePagination } from '@/hooks/usePagination'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const CompanyPagination = () => {
  const { nextPage, previousPage, page, hasNextPage, hasPreviousPage } =
    usePagination()

  return (
    <div className="flex items-center justify-center gap-1.5 rounded-opea border-2 border-gray-input bg-white-brand p-0.5 px-2.5">
      <button
        onClick={previousPage}
        className="enabled:text-wine-brand enabled:hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={hasPreviousPage}
      >
        &#x2190;
      </button>
      <div className="h-8 w-10 px-3 py-1 text-center font-semibold hover:opacity-90">
        {page}
      </div>
      <button
        onClick={nextPage}
        className="enabled:text-wine-brand enabled:hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={hasNextPage}
      >
        &#x2192;
      </button>
    </div>
  )
}

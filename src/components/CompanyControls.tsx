import { CompanyPagination } from './CompanyPagination'
import { SearchBar } from './SearchBar'

export const CompanyControls = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1980px] items-center justify-between gap-4 px-8 pt-8">
      <CompanyPagination />
      <SearchBar />
    </div>
  )
}

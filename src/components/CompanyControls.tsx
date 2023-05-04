import { CompanyPagination } from './CompanyPagination'
import { SearchBar } from './SearchBar'

export const CompanyControls = () => {
  return (
    <div className="flex w-full items-center justify-between px-8 pt-8 gap-4">
      <CompanyPagination />
      <SearchBar />
    </div>
  )
}

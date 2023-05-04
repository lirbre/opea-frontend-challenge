import { useCompany } from '@/hooks/useCompany'
import { Company } from './Company'
import { CreateCompany } from './CreateCompany'
import { EmptyCompany } from './EmptyCompany'
import { LoadingCompany } from './LoadingCompany'

export const CompanyList = () => {
  const { companyList, isLoading } = useCompany()

  if (isLoading)
    return (
      <div className="flex w-full flex-col gap-1.5 px-4 py-4 lg:px-8">
        <CreateCompany />
        <LoadingCompany />
      </div>
    )

  return (
    <div className="flex w-full flex-col gap-1.5 px-4 py-4 lg:px-8">
      <CreateCompany />
      {companyList?.length ? (
        companyList?.map((item) => <Company key={item.id} company={item} />)
      ) : (
        <EmptyCompany />
      )}
    </div>
  )
}

import { CompanyAPI } from '@/schemas/company'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { z } from 'zod'

export const maskCnpj = (document: string) => {
  if (!document) return ''
  let value = document.replace(/\D/g, '')

  value = value.replace(/^(\d{2})(\d)/, '$1.$2')
  value = value.replace(/^(\d{2}).(\d{3})(\d)/, '$1.$2.$3')
  value = value.replace(/.(\d{3})(\d)/, '.$1/$2')
  value = value.replace(/(\d{4})(\d)/, '$1-$2')

  return value
}

export const Company = ({
  company
}: {
  company: z.infer<typeof CompanyAPI>[number]
}) => {
  const { query, pathname, replace } = useRouter()

  return (
    <button
      aria-label={`Edit ${company.name} button`}
      className="flex h-20 w-full items-center gap-6 rounded-l-full border-2 border-transparent bg-white p-2 shadow-sm hover:opacity-80"
      onClick={() => {
        const queryParams = new URLSearchParams(window.location.search)

        if (company.name) {
          queryParams.set('edit', company.name)
        } else {
          queryParams.delete('edit')
        }

        replace(`${pathname}?${queryParams.toString()}`)
      }}
    >
      <div className="flex items-center justify-center rounded-full border-2 border-gray-input px-3 py-2.5">
        <Image
          src="/images/clipboard-list-icn.svg"
          width={14}
          height={20}
          alt="A gray clipboard icon"
        />
      </div>
      <div className="text-left text-gray-font">
        <p className="text-lg">{company.name}</p>
        <p className="hidden lg:block">
          CNPJ: {maskCnpj(company.cnpj)} - Email:{' '}
          <span className="text-sm">{company.email}</span>
        </p>
        <p className="block text-sm lg:hidden">
          CNPJ: {maskCnpj(company.cnpj)}
        </p>
        <p className="block text-sm lg:hidden">
          Email: <span className="text-sm">{company.email}</span>
        </p>
      </div>
    </button>
  )
}

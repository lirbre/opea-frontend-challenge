import Image from 'next/image'
import { useRouter } from 'next/router'

export const CreateCompany = () => {
  const { query, asPath, replace } = useRouter()

  return (
    <button
      aria-label="Create company button"
      className="flex h-20 w-full items-center justify-center rounded-l-full border-2 border-gray-input p-2 hover:opacity-80"
      onClick={() =>
        replace({ href: asPath, query: { ...query, create: true } })
      }
    >
      <div className="mr-auto flex items-center justify-center rounded-full border-2 border-gray-input px-3 py-2.5">
        <Image
          src="/images/clipboard-list-icn.svg"
          width={14}
          height={20}
          alt="A gray clipboard icon"
        />
      </div>
      <p className="mr-auto text-gray-brand">Adicionar empresa</p>
    </button>
  )
}

import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'

export const SearchBar = () => {
  const { asPath, replace, query } = useRouter()

  const searchRef = useRef<HTMLInputElement>(null)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        replace({
          href: asPath,
          query: { ...query, search: String(searchRef.current?.value) ?? '' }
        })
      }}
      className="flex w-full max-w-xs gap-1.5 rounded-opea border-2 border-gray-input pr-2.5"
    >
      <input
        className="w-full max-w-xs rounded-opea px-2.5 py-1 text-sm"
        placeholder="Buscar empresa..."
        defaultValue={String(query?.search ?? '')}
        ref={searchRef}
      />
      <button className="rounded-full">
        <Image
          src={'/images/search-icn.svg'}
          width={16}
          height={16}
          alt="A magnifying glass icon"
        />
      </button>
    </form>
  )
}

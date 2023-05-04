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
      className="w-full max-w-xs"
    >
      <input
        className="w-full max-w-xs rounded-opea border-2 border-gray-input px-2.5 py-1 text-sm"
        placeholder="Buscar empresa..."
        defaultValue={String(query?.search ?? '')}
        ref={searchRef}
      />
    </form>
  )
}

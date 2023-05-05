import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'

export const SearchBar = () => {
  const { pathname, replace, query } = useRouter()

  const searchRef = useRef<HTMLInputElement>(null)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        const queryParams = new URLSearchParams(window.location.search)

        if (searchRef.current?.value) {
          queryParams.set('search', searchRef.current?.value)
        } else {
          queryParams.delete('search')
        }
        queryParams.delete('page')

        replace(`${pathname}?${queryParams.toString()}`)
      }}
      className="flex w-full max-w-xs gap-1.5 rounded-opea border-2 border-gray-input bg-white py-1 pr-2.5"
    >
      <input
        className="w-full max-w-xs rounded-opea bg-transparent px-2.5 py-1 text-sm tracking-wide text-gray-font"
        placeholder="Buscar empresa..."
        defaultValue={String(query?.search ?? '')}
        ref={searchRef}
      />
      <button className="rounded-full bg-transparent">
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

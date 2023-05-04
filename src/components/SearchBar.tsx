import { useRouter } from 'next/router'
import { useRef } from 'react'

export const SearchBar = () => {
  const { asPath, replace } = useRouter()

  const searchRef = useRef<HTMLInputElement>(null)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        replace({
          href: asPath,
          query: { search: String(searchRef.current?.value) ?? '' }
        })
      }}
    >
      <input ref={searchRef} />
    </form>
  )
}

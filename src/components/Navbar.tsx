import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className="h-14 bg-white px-8 py-3 shadow-sm">
      <div className="flex max-w-[1980px] mx-auto items-center justify-between">
        <Image
          src="/images/opea-logo.svg"
          width={107}
          height={32}
          alt="Opea logo"
        />
        <a
          href="https://www.linkedin.com/in/lirbre/"
          target="_blank"
          rel="noreferrer"
          className="flex cursor-pointer items-center justify-center gap-3"
        >
          <p className="text-sm font-medium tracking-wider text-gray-brand">
            brenoliradev
          </p>
          <Image
            src="/images/icon-user.png"
            width={24}
            height={24}
            alt="blank user image"
          />
        </a>
      </div>
    </nav>
  )
}

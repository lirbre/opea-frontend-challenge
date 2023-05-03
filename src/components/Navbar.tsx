import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className="h-14 bg-white px-8 py-3 shadow-sm">
      <div className="flex max-w-[1980px] items-center justify-between">
        <Image
          src="/images/opea-logo.svg"
          width={107}
          height={32}
          alt="Opea logo"
        />
        <div className="flex items-center justify-center gap-3">
          <p className="text-sm font-medium tracking-wide text-gray-brand">
            Nome do Usuário
          </p>
          <Image
            src="/images/icon-user.png"
            width={24}
            height={24}
            alt="blank user image"
          />
        </div>
      </div>
    </nav>
  )
}

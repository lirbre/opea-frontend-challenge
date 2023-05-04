import Image from 'next/image'

export const LoadingCompany = () => {
  return (
    <div className="flex w-full animate-pulse items-center gap-6 rounded-l-full border-2 border-transparent bg-gradient-to-r from-transparent  via-rose-100/10 to-transparent p-2 shadow-sm">
      <div className="flex items-center justify-center rounded-full border-2 border-gray-input px-3 py-2.5">
        <Image
          src="/images/clipboard-list-icn.svg"
          width={14}
          height={20}
          alt="A gray clipboard icon"
        />
      </div>
      <div className="flex w-full flex-col gap-1.5">
        <span className="h-6 w-1/5 rounded-opea bg-gray-font/10 text-left" />
        <div className="flex w-1/4 gap-1.5">
          <span className="h-6 w-1/2 rounded-opea bg-gray-font/10 text-left" />
          <span className="h-6 w-1/3 rounded-opea bg-gray-font/10 text-left" />
        </div>
      </div>
    </div>
  )
}

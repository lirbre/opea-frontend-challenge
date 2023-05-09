import Image from 'next/image'

export const EmptyCompany = () => {
  return (
    <div className="flex h-20 w-full items-center gap-6 rounded-l-full border-2 border-transparent bg-white p-2 shadow-sm">
      <div className="flex items-center justify-center rounded-full border-2 border-gray-input px-3 py-2.5">
        <Image
          src="/images/clipboard-list-icn.svg"
          width={14}
          height={20}
          alt="A gray clipboard icon"
        />
      </div>
      <p className="text-left text-gray-font">
        Não foi possivel encontrar nenhuma empresa.
      </p>
    </div>
  )
}

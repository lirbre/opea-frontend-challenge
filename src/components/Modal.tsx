import Image from 'next/image'
import { useState } from 'react'

export const Modal = () => {
  const [open, setOpen] = useState<boolean>(true)

  return open ? (
    <div>
      {' '}
      <div
        className="fixed bottom-1/2 right-1/2 flex h-screen w-screen translate-x-1/2 translate-y-1/2 cursor-pointer items-center justify-center backdrop-blur-sm"
        onClick={() => setOpen(false)}
      ></div>
      <div className="fixed bottom-1/2 right-1/2 z-10 flex h-1/2 w-11/12 translate-x-1/2 translate-y-1/2 cursor-default rounded-md bg-white drop-shadow-md lg:w-1/4">
        <div className="flex h-10 w-full items-center justify-between border-b-[1px] border-[#DDDDDD] py-2 pl-4 pr-3">
          <p className="text-lg tracking-wide text-gray-text">
            Cadastrar Empresa
          </p>
          <Image
            src="/images/close-icn.svg"
            width={20}
            height={20}
            alt="A close icon. An 'x' letter with a rounded border around it"
            className="cursor-pointer hover:opacity-80"
            onClick={() => setOpen(false)}
          />
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

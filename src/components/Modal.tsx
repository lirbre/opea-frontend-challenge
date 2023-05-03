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
      <div className="fixed bottom-1/2 right-1/2 z-10 flex h-1/2 w-11/12 translate-x-1/2 translate-y-1/2 cursor-default flex-col justify-between rounded-opea bg-white pb-6 drop-shadow-md lg:w-1/4">
        <div className="flex h-10 w-full items-center justify-between rounded-opea border-b-2 border-[#DDDDDD] py-2 pl-4 pr-3">
          <p className="text-lg tracking-wide text-gray-text">
            Cadastrar Empresa
          </p>
          <button aria-label="modal-close-icn">
            <Image
              src="/images/close-icn.svg"
              width={20}
              height={20}
              alt="A close icon. An 'x' letter with a rounded border around it"
              className="cursor-pointer hover:opacity-80"
              onClick={() => setOpen(false)}
            />
          </button>
        </div>
        <div className="flex items-center justify-between px-6">
          <button
            name="modal-delete"
            className="rounded-opea border-2 border-gray-button p-1.5 hover:opacity-80"
          >
            <Image
              src="/images/delete-icn.svg"
              width={16}
              height={16}
              alt="A trash can"
            />
          </button>
          <div className="flex gap-4">
            <button
              className="rounded-opea border-2 border-gray-input px-3 py-2 tracking-wide text-gray-helper hover:opacity-80"
              aria-label="modal-cancel"
            >
              Cancelar
            </button>
            <button
              className="rounded-opea border-2 border-transparent bg-wine-brand px-3 py-2 tracking-wide text-white transition-all duration-300 hover:border-wine-brand hover:bg-transparent hover:text-wine-brand"
              aria-label="modal-confirm"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

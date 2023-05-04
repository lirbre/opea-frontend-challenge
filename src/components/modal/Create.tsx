import { useCompany } from '@/hooks/useCompany'
import useForm from '@/hooks/useForm'
import { CompanyForm } from '@/schemas/company'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Input } from '../Input'

export const CreateModal = () => {
  const { query, asPath, replace } = useRouter()

  const open = !!query.create

  const { createCompany } = useCompany()

  const [name, setName] = useState<string>('')
  const [cnpj, setCnpj] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const { errors, submitForm } = useForm(CompanyForm, (values) => {
    createCompany(values)

    toast.success(`${values.name} foi criada com sucesso!`)
    replace({ href: asPath, query: { ...query, create: '' } })

    setName('')
    setCnpj('')
    setEmail('')
  })

  useEffect(() => {
    if (!!query.create) {
      document.body.style.overflow = 'hidden'
      return
    }

    document.body.style.overflow = 'visible'
  }, [query.create])

  return open ? (
    <>
      {' '}
      <div
        className="fixed bottom-1/2 right-1/2 flex h-screen w-screen translate-x-1/2 translate-y-1/2 cursor-pointer items-center justify-center backdrop-blur-sm"
        onClick={() =>
          replace({ href: asPath, query: { ...query, create: '' } })
        }
      ></div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          submitForm({ name, cnpj, email })
        }}
        className="min-h-1/2 fixed bottom-1/2 right-1/2 z-10 flex w-11/12 translate-x-1/2 translate-y-1/2 cursor-default flex-col justify-between gap-4 rounded-opea bg-white pb-6 drop-shadow-md lg:w-1/4"
      >
        <div className="flex h-10 w-full items-center justify-between rounded-t-opea border-b-2 border-[#DDDDDD] py-2 pl-4 pr-3">
          <p className="text-lg tracking-wide text-gray-text">
            Cadastrar Empresa
          </p>
          <button type="reset" aria-label="modal-close-icn">
            <Image
              src="/images/close-icn.svg"
              width={20}
              height={20}
              alt="A close icon. An 'x' letter with a rounded border around it"
              className="cursor-pointer hover:opacity-80"
              onClick={() =>
                replace({ href: asPath, query: { ...query, create: '' } })
              }
            />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            inputName="company-name"
            label="Nome"
            placeholder="Digite o nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors?.name ? (
            <span className="px-6 text-sm text-wine-brand">{errors.name}</span>
          ) : (
            <></>
          )}
          <Input
            inputName="company-cnpj"
            label="CNPJ"
            placeholder="Digite o CNPJ"
            maxLength={14}
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />
          {errors?.cnpj ? (
            <span className="px-6 text-sm text-wine-brand">{errors.cnpj}</span>
          ) : (
            <></>
          )}
          <Input
            inputName="company-name"
            label="E-mail"
            placeholder="Digite o e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors?.email ? (
            <span className="px-6 text-sm text-wine-brand">{errors.email}</span>
          ) : (
            <></>
          )}
        </div>
        <div className="flex items-center justify-end px-6">
          <div className="flex gap-4">
            <button
              type="reset"
              className="rounded-opea border-2 border-gray-input px-3 py-2 tracking-wide text-gray-helper hover:opacity-80"
              aria-label="modal-cancel"
              onClick={() =>
                replace({ href: asPath, query: { ...query, create: '' } })
              }
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-opea border-2 border-transparent bg-wine-brand px-3 py-2 tracking-wide text-white transition-all duration-300 hover:border-wine-brand hover:bg-transparent hover:text-wine-brand"
              aria-label="modal-confirm"
            >
              Confirmar
            </button>
          </div>
        </div>
      </form>
    </>
  ) : (
    <></>
  )
}

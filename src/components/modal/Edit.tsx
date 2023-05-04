import { useCompany } from '@/hooks/useCompany'
import useForm from '@/hooks/useForm'
import { CompanyForm } from '@/schemas/company'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import { toast } from 'sonner'
import { Input } from '../Input'

export const EditModal = () => {
  const { query, replace, asPath } = useRouter()

  const open = !!query.edit

  const { companyList, updateCompany, deleteCompany } = useCompany()

  const [name, setName] = useState<string>('')
  const [cnpj, setCnpj] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const cleanedData = useMemo(() => {
    if (!companyList) return { id: '', name: '', cnpj: '', email: '' }

    const temp = companyList
      .filter((item) => item.id === query.edit)
      .map((item) => {
        setName(item?.name ?? '')
        setEmail(item?.email ?? '')
        setCnpj(item?.cnpj ?? '')

        return item
      })

    return temp[0]
  }, [companyList, query.edit])

  const { errors, submitForm, forceUpdateError } = useForm(CompanyForm, (values) => {
    updateCompany({ body: values, id: String(query.edit ?? '') })
    toast.success(`${cleanedData.name} foi editada com sucesso!`)
    replace({ href: asPath, query: { ...query, edit: '' } })
  })

  useEffect(() => {
    if (!!query.edit) {
      document.body.style.overflow = 'hidden'
      return
    }

    document.body.style.overflow = 'visible'
  }, [query.edit])

  useEffect(() => {
    if (cleanedData?.id || !query.edit) return forceUpdateError(undefined)

    replace({ href: asPath, query: { ...query, edit: '' } })
  }, [cleanedData, asPath, query, replace, forceUpdateError])

  return open ? (
    <>
      {' '}
      <div
        className="fixed bottom-1/2 right-1/2 flex h-screen w-screen translate-x-1/2 translate-y-1/2 cursor-pointer items-center justify-center backdrop-blur-sm"
        onClick={() => replace({ href: asPath, query: { ...query, edit: '' } })}
      ></div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          submitForm({ name, email, cnpj })
        }}
        className="min-h-1/2 fixed bottom-1/2 right-1/2 z-10 flex w-11/12 translate-x-1/2 translate-y-1/2 cursor-default flex-col justify-between gap-4 rounded-opea bg-white pb-6 drop-shadow-md lg:w-1/4"
      >
        <div className="flex h-10 w-full items-center justify-between rounded-t-opea border-b-2 border-[#DDDDDD] py-2 pl-4 pr-3">
          <p className="text-lg tracking-wide text-gray-text">Editar Empresa</p>
          <button type="reset" aria-label="modal-close-icn">
            <Image
              src="/images/close-icn.svg"
              width={20}
              height={20}
              alt="A close icon. An 'x' letter with a rounded border around it"
              className="cursor-pointer hover:opacity-80"
              onClick={() =>
                replace({ href: asPath, query: { ...query, edit: '' } })
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
        <div className="flex items-center justify-between px-6">
          <button
            name="modal-delete"
            type="reset"
            className="rounded-opea border-2 border-gray-button p-1.5 hover:opacity-80"
            onClick={() => {
              deleteCompany(String(query.edit || ''))
              replace({ href: asPath, query: { ...query, edit: '' } })
            }}
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
              type="reset"
              className="rounded-opea border-2 border-gray-input px-3 py-2 tracking-wide text-gray-helper hover:opacity-80"
              aria-label="modal-cancel"
              onClick={() =>
                replace({ href: asPath, query: { ...query, edit: '' } })
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

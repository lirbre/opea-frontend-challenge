import { z } from 'zod'

export const RegexCNPJ = /[0-9]/g

export const CompanyForm = z.object({
  name: z.string().min(1, { message: 'Por favor, insira um nome.' }),
  email: z.string().min(1, { message: 'Por favor, insira um email válido.' }),
  cnpj: z
    .string()
    .min(1, { message: 'Por favor, insira um CNPJ válido.' })
    .length(14, { message: 'Por favor, insira um CNPJ válido.' })
    .regex(RegexCNPJ, {
      message: 'Por favor, insira somente digitos numéricos.'
    })
})

export const CompanyAPI = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    cnpj: z.string()
  })
)

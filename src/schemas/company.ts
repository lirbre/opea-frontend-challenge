import { z } from 'zod'

export const RegexCNPJ =
  /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/

export const CompayForm = z.object({
  name: z.string().min(1, { message: 'Por favor, insira um nome.' }),
  email: z.string().min(1, { message: 'Por favor, insira um email válido.' }),
  cnpj: z.string().length(14, { message: 'Por favor, insira um CNPJ válido.' })
})

export const CompayAPI = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  cnpj: z.string()
})

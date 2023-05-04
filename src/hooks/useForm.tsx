import { useState } from 'react'
import type { z } from 'zod'
import type { ZodError, ZodIssue } from 'zod'

const useForm = <TValues,>(
  schema: z.Schema<TValues>,
  submitCallback: (values: TValues) => void
) => {
  const [stateError, setStateError] = useState<
    z.infer<z.Schema<TValues>> | undefined
  >()

  const formatError = (
    err: ZodError<z.infer<z.Schema<TValues>>>
  ): z.infer<z.Schema<TValues>> => {
    const formated = Object.values(
      JSON.parse(err.message) as ZodIssue[]
    ).reduce((acc: z.infer<z.Schema<TValues>>, item: ZodIssue) => {
      return { ...acc, [String(item.path)]: item.message }
    }, {} as z.infer<z.Schema<TValues>>)

    setStateError(formated)

    return formated
  }

  const submitForm = (values: z.infer<z.Schema<TValues>>) => {
    try {
      const newValues = schema.parse(values)
      submitCallback(newValues)
      setStateError(undefined)

      return {}
    } catch (err: unknown) {
      const errors = formatError(err as ZodError<TValues>)

      return { errors }
    }
  }

  return {
    submitForm,
    errors: stateError
  }
}

export default useForm

import { InputHTMLAttributes } from 'react'

interface CustomInput extends InputHTMLAttributes<HTMLInputElement> {
  inputName: string
  label: string
  placeholder: string
}

export const Input = ({
  inputName,
  label,
  placeholder,
  ...rest
}: CustomInput) => {
  return (
    <div className="flex flex-col gap-1 px-6">
      <label htmlFor={inputName} className="text-wine-brand">
        {label}
      </label>
      <input
        name={inputName}
        className="border-2 border-gray-input p-2"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}

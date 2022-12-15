import { ChangeEvent, ReactNode } from 'react'

export type InputTypes =
  | 'email'
  | 'text'
  | 'number'
  | 'password'
  | 'search'
  | 'file'

export type InputSizes = 'sm' | 'md'

export type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  type?: InputTypes
  size?: InputSizes
  name?: string
  label?: string
  value?: string
  placeholder?: string
  error?: string
  hint?: string
  maxLength?: number
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  noStyle?: boolean
  defaultValue?: string
  accept?: string
  leading?: ReactNode
  trailing?: ReactNode
  className?: string
  containerClassName?: string
  onBlur?: (() => void) | ((event: ChangeEvent<HTMLInputElement>) => void)
  onChange?: (() => void) | ((event: ChangeEvent<HTMLInputElement>) => void)
}

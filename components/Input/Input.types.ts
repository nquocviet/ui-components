import { ChangeEvent, ReactNode } from 'react'

export type InputTypes = 'email' | 'text' | 'password'

export type InputSizes = 'sm' | 'md'

export type InputProps = {
  type?: InputTypes
  size?: InputSizes
  name: string
  label?: string
  value?: string
  placeholder?: string
  error?: string
  hint?: string
  maxLength?: number
  required?: boolean
  disabled?: boolean
  defaultValue?: string
  leading?: ReactNode
  trailing?: ReactNode
  className?: string
  onBlur?: (() => void) | ((event: ChangeEvent<HTMLInputElement>) => void)
  onChange?: (() => void) | ((event: ChangeEvent<HTMLInputElement>) => void)
} & React.HTMLAttributes<HTMLInputElement>

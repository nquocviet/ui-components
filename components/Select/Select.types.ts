import { ReactNode } from 'react'

export type OptionType = {
  label: string
  value: string
}

export type SelectSizes = 'sm' | 'md'

export type SelectProps = {
  options: OptionType[]
  size?: SelectSizes
  defaultOption?: OptionType | OptionType[] | {}
  label?: string
  name: string
  placeholder?: string
  maxHeight?: number
  maxItems?: number
  disabled?: boolean
  multiple?: boolean
  required?: boolean
  error?: string
  leading?: ReactNode
  trailing?: ReactNode
  className?: string
  onChange: ((value: any) => void) | ((values: any[]) => void)
  onRemove?: () => void
} & React.HTMLAttributes<HTMLInputElement>

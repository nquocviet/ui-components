import { ReactNode } from 'react'
import { PropsSpread } from '@/utils'

export type OptionType = {
  label: string
  value: string
}

export type SelectSizes = 'sm' | 'md'

export type SelectProps = PropsSpread<
  React.HTMLAttributes<HTMLInputElement>,
  {
    options: OptionType[]
    size?: SelectSizes
    defaultValue?: string | string[]
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
    onChange: (value: string | string[]) => void
    onRemove?: () => void
  }
>

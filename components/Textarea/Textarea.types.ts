import { ChangeEvent } from 'react'

export type TextareaSizes = 'sm' | 'md'

export type TextareaProps = React.HTMLAttributes<HTMLTextAreaElement> & {
  size?: TextareaSizes
  name?: string
  label?: string
  value?: string
  placeholder?: string
  className?: string
  error?: string
  hint?: string
  disabled?: boolean
  required?: boolean
  defaultValue?: string
  rows?: number
  onBlur?: (() => void) | ((event: ChangeEvent<HTMLTextAreaElement>) => void)
  onChange?: (() => void) | ((event: ChangeEvent<HTMLTextAreaElement>) => void)
}

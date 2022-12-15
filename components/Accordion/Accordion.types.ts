import React, { ReactNode } from 'react'

export type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode | ReactNode[]
  value?: string | string[]
  defaultValue?: string | string[]
  multiple?: boolean
  className?: string
  onChange?: (value: string | string[]) => void
}

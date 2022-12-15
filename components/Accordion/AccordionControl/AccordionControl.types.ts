import React, { ReactNode } from 'react'

export type AccordionControlProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  icon?: ReactNode
  chevron?: ReactNode
  disabled?: boolean
  className?: string
}

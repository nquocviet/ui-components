import React, { ReactNode } from 'react'

export type AccordionItemProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode[]
  value: string
  className?: string
}

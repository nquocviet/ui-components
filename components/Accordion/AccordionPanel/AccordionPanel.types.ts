import React, { ReactNode } from 'react'

export type AccordionPanelProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode | ReactNode[]
  className?: string
}

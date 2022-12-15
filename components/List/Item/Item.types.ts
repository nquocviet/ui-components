import React, { ReactNode } from 'react'

export type ItemProps = {
  children: ReactNode
  icon?: ReactNode
} & React.HTMLAttributes<HTMLLIElement>

import React, { ReactNode } from 'react'

export type TabPanelProps = {
  children: ReactNode
  key: string
  label: ReactNode
  disabled?: boolean
  count?: number
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

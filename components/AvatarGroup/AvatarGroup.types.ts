import { ReactNode } from 'react'

export type AvatarGroupVariants = 'circular' | 'rounded' | 'square'

export type AvatarGroupSpacings = 'sm' | 'md' | 'lg'

export type AvatarGroupProps = {
  variant?: AvatarGroupVariants
  max?: number
  spacing?: AvatarGroupSpacings
  children: ReactNode | ReactNode[]
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

import { ReactNode } from 'react'

export type AvatarGroupVariants = 'circular' | 'rounded' | 'square'

export type AvatarGroupSpacings = 'sm' | 'md' | 'lg'

export type AvatarGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: AvatarGroupVariants
  max?: number
  spacing?: AvatarGroupSpacings
  children: ReactNode | ReactNode[]
  className?: string
}

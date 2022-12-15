import { LinkProps } from 'next/link'

export type TagActions = 'text' | 'close' | 'count'

export type TagThemes = 'light' | 'dark'

export type TagSizes = 'sm' | 'md' | 'lg'

export type TagBaseProps = {
  action?: TagActions
  theme?: TagThemes
  size?: TagSizes
  label: string
  count?: number
  href?: string
  hasCheckbox?: boolean
  className?: string
  onClose?: () => void
  onCheck?: () => void
}

export type TagAsSpan = TagBaseProps &
  Omit<React.HTMLAttributes<HTMLSpanElement>, keyof TagBaseProps> & {
    as?: 'span'
  }

export type TagAsLink = TagBaseProps &
  Omit<LinkProps, keyof TagBaseProps> & {
    as: 'a'
  }

export type TagProps = TagAsSpan | TagAsLink

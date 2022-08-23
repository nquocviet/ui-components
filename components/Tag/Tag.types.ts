export type TagActions = 'text' | 'close' | 'count'

export type TagThemes = 'light' | 'dark'

export type TagSizes = 'sm' | 'md' | 'lg'

export type TagProps = {
  action?: TagActions
  theme?: TagThemes
  size?: TagSizes
  label: string
  count?: number
  hasCheckbox?: boolean
  className?: string
  onClose?: () => void
  onCheck?: () => void
} & React.HTMLAttributes<HTMLSpanElement>

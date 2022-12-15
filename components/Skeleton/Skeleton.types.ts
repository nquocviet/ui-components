export type SkeletonVariants = 'text' | 'circular' | 'rectangular' | 'rounded'

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: SkeletonVariants
  width?: number | string
  height?: number | string
  animation?: boolean
  className?: string
}

export type SpinnerTypes = 'dash' | 'dots'

export type SpinnerSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type SpinnerProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: SpinnerTypes
  size?: SpinnerSizes
  className?: string
}

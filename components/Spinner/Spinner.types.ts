export type SpinnerTypes = 'dash' | 'dots'

export type SpinnerSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type SpinnerProps = {
  type?: SpinnerTypes
  size?: SpinnerSizes
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

export type ProgressLabelPlacements = 'none' | 'right' | 'bottom'

export type ProgressProps = {
  value: number
  label?: string
  labelPlacement?: ProgressLabelPlacements
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

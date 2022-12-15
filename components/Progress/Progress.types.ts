export type ProgressLabelPlacements = 'none' | 'right' | 'bottom'

export type ProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number
  label?: string
  labelPlacement?: ProgressLabelPlacements
  className?: string
}

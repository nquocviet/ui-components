export const styles = {
  base: 'text-center whitespace-nowrap rounded-3xl font-medium',
  colors: {
    primary: {
      standard: 'bg-primary-50 text-primary-700',
      dot: 'bg-primary-700',
    },
    gray: {
      standard: 'bg-gray-100 text-gray-700',
      dot: 'bg-gray-700',
    },
    info: {
      standard: 'bg-info-50 text-info-700',
      dot: 'bg-info-700',
    },
    error: {
      standard: 'bg-error-50 text-error-700',
      dot: 'bg-error-700',
    },
    warning: {
      standard: 'bg-warning-50 text-warning-700',
      dot: 'bg-warning-600',
    },
    success: {
      standard: 'bg-success-50 text-success-700',
      dot: 'bg-success-600',
    },
  },
  placements: {
    left: {
      standard: 'left-0 -translate-x-1/2',
      dot: 'left-0',
    },
    right: {
      standard: 'right-0 translate-x-1/2',
      dot: 'right-0',
    },
    top: {
      standard: 'top-0 -translate-y-1/2',
      dot: 'top-0',
    },
    bottom: {
      standard: 'bottom-0 translate-y-1/2',
      dot: 'bottom-0',
    },
  },
  sizes: {
    sm: 'text-xs min-w-[22px] px-1 py-0.5',
    md: 'text-sm min-w-[24px] px-1.5 py-0.5',
    lg: 'text-sm min-w-[28px] px-2 py-1',
  },
  dotSizes: {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-3.5 h-3.5',
    '2xl': 'w-4 h-4',
  },
}

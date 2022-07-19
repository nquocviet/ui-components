export const styles = {
  base: 'absolute w-full h-full rounded-full bg-white border border-gray-300 transition-colors transition-transform duration-100 peer-checked:scale-0 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100',
  containerSizes: {
    xs: 14,
    sm: 16,
    md: 20,
    lg: 24,
  },
  iconSizes: {
    xs: 6,
    sm: 8,
    md: 12,
    lg: 16,
  },
  fontSizes: {
    xs: 'text-2xs',
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-md',
  },
  containerThemes: {
    light:
      'border-primary-300 bg-primary-50 peer-enabled:peer-hover:bg-primary-100 peer-disabled:bg-gray-300 peer-disabled:border-gray-300',
    dark: 'border-primary-600 bg-primary-600 peer-enabled:peer-hover:bg-primary-700 peer-enabled:peer-hover:border-primary-700 peer-disabled:bg-gray-300 peer-disabled:border-gray-300',
  },
  radioThemes: {
    light:
      'peer-enabled:peer-hover:bg-primary-50 peer-enabled:peer-hover:border-primary-300',
    dark: 'peer-enabled:peer-hover:bg-primary-100 peer-enabled:peer-hover:border-primary-600',
  },
  iconThemes: {
    light: 'text-primary-400 peer-disabled:text-white',
    dark: 'text-white',
  },
}

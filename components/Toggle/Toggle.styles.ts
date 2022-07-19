export const styles = {
  base: 'w-toggle h-toggle p-toggle rounded-full cursor-pointer transition-colors peer-disabled:bg-gray-50 peer-disabled:cursor-not-allowed',
  themes: {
    light:
      'bg-primary-50 hover:bg-primary-100 peer-checked:bg-primary-200 peer-enabled:peer-checked:hover:bg-primary-300',
    dark: 'bg-gray-100 hover:bg-gray-200 peer-checked:bg-primary-600 peer-enabled:peer-checked:hover:bg-primary-700',
  },
  sizes: {
    sm: 16,
    md: 20,
    lg: 24,
  },
  fontSizes: {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-md',
  },
}

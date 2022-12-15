export const styles = {
  base: 'inline-flex items-center child:shrink-0',
  states: {
    default:
      'transition-transform duration-200 child:cursor-pointer hover:scale-[1.2]',
    readOnly: '',
    disabled: 'opacity-40 child:cursor-not-allowed',
  },
  sizes: {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 30,
  },
}

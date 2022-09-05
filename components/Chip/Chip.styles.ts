export const styles = {
  base: 'inline-flex justify-center items-center gap-1.5 rounded-full',
  colors: {
    primary: {
      contained: 'bg-primary-700 text-white',
      light: 'bg-primary-50 text-primary-700',
      outlined: 'ring-1 ring-primary-700 text-primary-700',
    },
    gray: {
      contained: 'bg-gray-700 text-white',
      light: 'bg-gray-100 text-gray-700',
      outlined: 'ring-1 ring-gray-700 text-gray-700',
    },
    info: {
      contained: 'bg-blue-700 text-white',
      light: 'bg-blue-50 text-blue-700',
      outlined: 'ring-1 ring-blue-700 text-blue-700',
    },
    error: {
      contained: 'bg-red-700 text-white',
      light: 'bg-red-50 text-red-700',
      outlined: 'ring-1 ring-red-700 text-red-700',
    },
    warning: {
      contained: 'bg-yellow-500 text-white',
      light: 'bg-yellow-50 text-yellow-700',
      outlined: 'ring-1 ring-yellow-700 text-yellow-700',
    },
    success: {
      contained: 'bg-green-700 text-white',
      light: 'bg-green-50 text-green-700',
      outlined: 'ring-1 ring-green-700 text-green-700',
    },
  },
  sizes: {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-sm px-3 py-1',
  },
  rounded: {
    sm: 'text-xs px-[7px] py-0.5',
    md: 'text-sm px-2 py-0.5',
    lg: 'text-sm px-2.5 py-1',
  },
  leading: {
    sm: '-ml-[5px]',
    md: '-ml-1.5',
    lg: '-ml-2',
  },
  trailing: {
    sm: '-mr-[5px]',
    md: '-mr-1.5',
    lg: '-mr-2',
  },
}

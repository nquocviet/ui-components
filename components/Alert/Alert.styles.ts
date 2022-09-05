export const styles = {
  base: 'relative flex flex-col gap-2 p-4 border rounded-lg xs:flex-row',
  colors: {
    primary: {
      contained: 'bg-primary-600 border-primary-600 text-white',
      outlined: 'bg-primary-25 border-primary-300 text-primary-600',
    },
    gray: {
      contained: 'bg-gray-700 border-gray-700 text-white',
      outlined: 'bg-gray-25 border-gray-300 text-gray-600',
    },
    info: {
      contained: 'bg-blue-600 border-blue-600 text-white',
      outlined: 'bg-blue-25 border-blue-300 text-blue-600',
    },
    error: {
      contained: 'bg-red-600 border-red-600 text-white',
      outlined: 'bg-red-25 border-red-300 text-red-600',
    },
    warning: {
      contained: 'bg-yellow-500 border-yellow-500 text-white',
      outlined: 'bg-yellow-25 border-yellow-300 text-yellow-600',
    },
    success: {
      contained: 'bg-green-600 border-green-600 text-white',
      outlined: 'bg-green-25 border-green-300 text-green-600',
    },
  },
  placements: {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2 w-full xs:w-2/3 md:w-auto',
    top: 'top-0',
    bottom: 'bottom-0',
  },
}

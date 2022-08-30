export const styles = {
  base: 'flex',
  label:
    'inline-flex items-center gap-2 font-medium transition-colors duration-200',
  types: {
    primary: {
      label: 'rounded-md',
      labelContainer: '',
      states: {
        default: 'text-gray-500 hover:text-primary-700',
        active: 'bg-primary-50 text-primary-700',
        disabled: 'text-gray-400 cursor-not-allowed',
      },
    },
    gray: {
      label: 'rounded-md',
      labelContainer: '',
      states: {
        default: 'text-gray-500 hover:text-gray-700',
        active: 'bg-gray-50 text-gray-700',
        disabled: 'text-gray-400 cursor-not-allowed',
      },
    },
    white: {
      label: 'rounded-md',
      labelContainer: 'bg-gray-50',
      states: {
        default: 'text-gray-500 hover:text-gray-700',
        active: 'shadow-sm bg-white text-gray-700',
        disabled: 'text-gray-400 cursor-not-allowed',
      },
    },
    underline: {
      label: 'relative',
      labelContainer: '',
      states: {
        default: 'text-gray-500 hover:text-primary-700',
        active:
          'after:absolute after:left-0 after:top-full after:w-full after:border-b-2 after:border-primary-700 text-primary-700',
        disabled: 'text-gray-400 cursor-not-allowed',
      },
    },
    filled: {
      label: 'relative',
      labelContainer: '',
      states: {
        default: 'text-gray-500 hover:text-primary-700',
        active:
          'after:absolute after:left-0 after:top-full after:w-full after:border-b-2 after:border-primary-700 bg-primary-50 text-primary-700',
        disabled: 'text-gray-400 cursor-not-allowed',
      },
    },
  },
  sizes: {
    primary: {
      sm: 'text-sm px-3 py-2',
      md: 'text-md px-3.5 py-2.5',
    },
    gray: {
      sm: 'text-sm px-3 py-2',
      md: 'text-md px-3.5 py-2.5',
    },
    white: {
      sm: 'text-sm px-3 py-2',
      md: 'text-md px-3.5 py-2.5',
    },
    underline: {
      sm: 'text-sm px-1 pb-4',
      md: 'text-md px-1 pb-4.5',
    },
    filled: {
      sm: 'text-sm p-3',
      md: 'text-md',
    },
  },
  directions: {
    vertical: {
      labelContainer: 'p-1 rounded-lg',
      tabs: 'flex items-stretch',
    },
    horizontal: {
      labelContainer: 'p-1 rounded-lg',
      tabs: 'flex flex-col items-stretch',
    },
  },
}

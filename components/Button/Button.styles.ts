export const styles = {
  base: 'relative inline-flex justify-center flex-wrap items-center gap-2 border ring-0 cursor-pointer font-medium transition-all duration-200 enabled:focus:ring-4 disabled:cursor-not-allowed',
  colors: {
    primary: {
      contained:
        'bg-primary-600 text-white border-primary-600 ring-primary-100 enabled:hover:bg-primary-700 enabled:hover:border-primary-700 disabled:bg-primary-200 disabled:border-primary-200',
      gradient:
        'enabled:bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 bg-[length:200%_auto] text-white border-transparent ring-primary-100 enabled:hover:bg-[right_100%] disabled:bg-primary-200 disabled:border-primary-200',
      light:
        'bg-primary-25 text-primary-700 border-primary-25 ring-primary-100 enabled:hover:bg-primary-50 enabled:hover:border-primary-50 disabled:bg-primary-25 disabled:border-primary-25 disabled:text-primary-300',
      outlined:
        'bg-white text-primary-700 border-primary-500 ring-primary-100 enabled:hover:bg-primary-50 disabled:border-primary-200 disabled:text-primary-300',
      text: 'text-primary-700 border-transparent ring-primary-100 enabled:hover:border-primary-50 enabled:hover:bg-primary-50 disabled:text-gray-300',
      link: 'text-primary-700 border-transparent enabled:hover:underline disabled:text-gray-300',
    },
    gray: {
      contained:
        'bg-gray-800 text-white border-gray-800 ring-gray-200 enabled:hover:bg-gray-900 enabled:hover:border-gray-900 disabled:bg-gray-300 disabled:border-gray-300',
      gradient:
        'enabled:bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-[length:200%_auto] text-white border-transparent ring-gray-200 enabled:hover:bg-[right_100%] disabled:bg-gray-300 disabled:border-gray-300',
      light:
        'bg-gray-100 text-gray-700 border-gray-100 ring-gray-200 enabled:hover:bg-gray-200 enabled:hover:border-gray-100 disabled:bg-gray-50 disabled:border-gray-50 disabled:text-gray-300',
      outlined:
        'bg-white text-gray-700 border-gray-300 ring-gray-200 enabled:hover:bg-gray-100 disabled:border-gray-200 disabled:text-gray-300',
      text: 'text-gray-700 border-transparent ring-gray-200 enabled:hover:border-gray-50 enabled:hover:bg-gray-50 disabled:text-gray-300',
      link: 'text-gray-700 border-transparent enabled:hover:underline disabled:text-gray-300',
    },
    info: {
      contained:
        'bg-blue-700 text-white border-blue-700 ring-blue-100 enabled:hover:bg-blue-800 enabled:hover:border-blue-800 disabled:bg-blue-200 disabled:border-blue-200',
      gradient:
        'enabled:bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 bg-[length:200%_auto] text-white border-transparent ring-blue-100 enabled:hover:bg-[right_100%] disabled:bg-blue-200 disabled:border-blue-200',
      light:
        'bg-blue-25 text-blue-500 border-blue-25 ring-blue-100 enabled:hover:bg-blue-50 enabled:hover:border-blue-50 disabled:bg-blue-25 disabled:border-blue-25 disabled:text-blue-300',
      outlined:
        'bg-white text-blue-600 border-blue-500 ring-blue-100 enabled:hover:bg-blue-50 disabled:border-blue-200 disabled:text-blue-300',
      text: 'text-blue-600 border-transparent ring-blue-100 enabled:hover:border-blue-50 enabled:hover:bg-blue-50 disabled:text-gray-300',
      link: 'text-blue-600 border-transparent enabled:hover:underline disabled:text-gray-300',
    },
    error: {
      contained:
        'bg-red-600 text-white border-red-600 ring-red-100 enabled:hover:bg-red-700 enabled:hover:border-red-700 disabled:bg-red-200 disabled:border-red-200',
      gradient:
        'enabled:bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-[length:200%_auto] text-white border-transparent ring-red-100 enabled:hover:bg-[right_100%] disabled:bg-red-200 disabled:border-red-200',
      light:
        'bg-red-25 text-red-700 border-red-25 ring-red-100 enabled:hover:bg-red-50 enabled:hover:border-red-50 disabled:bg-red-25 disabled:border-red-25 disabled:text-red-300',
      outlined:
        'bg-white text-red-700 border-red-500 ring-red-100 enabled:hover:bg-red-50 disabled:border-red-200 disabled:text-red-300',
      text: 'text-red-700 border-transparent ring-red-100 enabled:hover:border-red-50 enabled:hover:bg-red-50 disabled:text-gray-300',
      link: 'text-red-700 border-transparent enabled:hover:underline disabled:text-gray-300',
    },
    warning: {
      contained:
        'bg-yellow-500 text-white border-yellow-500 ring-yellow-100 enabled:hover:bg-yellow-600 enabled:hover:border-yellow-600 disabled:bg-yellow-200 disabled:border-yellow-200',
      gradient:
        'enabled:bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 bg-[length:200%_auto] text-white border-transparent ring-yellow-100 enabled:hover:bg-[right_100%] disabled:bg-yellow-200 disabled:border-yellow-200',
      light:
        'bg-yellow-25 text-yellow-600 border-yellow-25 ring-yellow-100 enabled:hover:bg-yellow-50 enabled:hover:border-yellow-50 disabled:bg-yellow-25 disabled:border-yellow-25 disabled:text-yellow-200',
      outlined:
        'bg-white text-yellow-600 border-yellow-400 ring-yellow-100 enabled:hover:bg-yellow-50 disabled:border-yellow-100 disabled:text-yellow-200',
      text: 'text-yellow-600 border-transparent ring-yellow-100 enabled:hover:border-yellow-50 enabled:hover:bg-yellow-50 disabled:text-gray-300',
      link: 'text-yellow-600 border-transparent enabled:hover:underline disabled:text-gray-300',
    },
    success: {
      contained:
        'bg-green-600 text-white border-green-600 ring-green-100 enabled:hover:bg-green-700 enabled:hover:border-green-700 disabled:bg-green-200 disabled:border-green-200',
      gradient:
        'enabled:bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-[length:200%_auto] text-white border-transparent ring-green-100 enabled:hover:bg-[right_100%] disabled:bg-green-200 disabled:border-green-200',
      light:
        'bg-green-25 text-green-600 border-green-25 ring-green-100 enabled:hover:bg-green-50 enabled:hover:border-green-50 disabled:bg-green-25 disabled:border-green-25 disabled:text-green-300',
      outlined:
        'bg-white text-green-600 border-green-500 ring-green-100 enabled:hover:bg-green-50 disabled:border-green-200 disabled:text-green-300',
      text: 'text-green-600 border-transparent ring-green-100 enabled:hover:border-green-50 enabled:hover:bg-green-50 disabled:text-gray-300',
      link: 'text-green-600 border-transparent enabled:hover:underline disabled:text-gray-300',
    },
  },
  fontSizes: {
    xs: 'text-sm',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-md',
    xl: 'text-md',
    '2xl': 'text-lg',
  },
  sizes: {
    xs: 'px-3 py-1.5 rounded-lg',
    sm: 'px-3.5 py-2 rounded-lg',
    md: 'px-4 py-2.5 rounded-lg',
    lg: 'px-[18px] py-2.5 rounded-lg',
    xl: 'px-5 py-3 rounded-lg',
    '2xl': 'px-6 py-4 rounded-lg',
  },
  iconSizes: {
    xs: 'p-1.5 min-w-[34px] rounded-md',
    sm: 'p-2 min-w-[38px] rounded-md',
    md: 'p-2.5 min-w-[42px] rounded-lg',
    lg: 'p-3 min-w-[50px] rounded-lg',
    xl: 'p-3.5 min-w-[54px] rounded-lg',
    '2xl': 'p-4 min-w-[62px] rounded-lg',
  },
  width: {
    auto: 'w-auto',
    fluid: 'w-full',
  },
}

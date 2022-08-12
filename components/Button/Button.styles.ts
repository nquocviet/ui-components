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
        'bg-gray-50 text-gray-700 border-gray-50 ring-gray-200 enabled:hover:bg-gray-100 enabled:hover:border-gray-100 disabled:bg-gray-50 disabled:border-gray-50 disabled:text-gray-300',
      outlined:
        'bg-white text-gray-700 border-gray-300 ring-gray-200 enabled:hover:bg-gray-100 disabled:border-gray-200 disabled:text-gray-300',
      text: 'text-gray-700 border-transparent ring-gray-200 enabled:hover:border-gray-50 enabled:hover:bg-gray-50 disabled:text-gray-300',
      link: 'text-gray-700 border-transparent enabled:hover:underline disabled:text-gray-300',
    },
    info: {
      contained:
        'bg-info-700 text-white border-info-700 ring-info-100 enabled:hover:bg-info-800 enabled:hover:border-info-800 disabled:bg-info-200 disabled:border-info-200',
      gradient:
        'enabled:bg-gradient-to-r from-info-700 via-info-500 to-info-700 bg-[length:200%_auto] text-white border-transparent ring-info-100 enabled:hover:bg-[right_100%] disabled:bg-info-200 disabled:border-info-200',
      light:
        'bg-info-25 text-info-500 border-info-25 ring-info-100 enabled:hover:bg-info-50 enabled:hover:border-info-50 disabled:bg-info-25 disabled:border-info-25 disabled:text-info-300',
      outlined:
        'bg-white text-info-600 border-info-500 ring-info-100 enabled:hover:bg-info-50 disabled:border-info-200 disabled:text-info-300',
      text: 'text-info-600 border-transparent ring-info-100 enabled:hover:border-info-50 enabled:hover:bg-info-50 disabled:text-gray-300',
      link: 'text-info-600 border-transparent enabled:hover:underline disabled:text-gray-300',
    },
    error: {
      contained:
        'bg-error-600 text-white border-error-600 ring-error-100 enabled:hover:bg-error-700 enabled:hover:border-error-700 disabled:bg-error-200 disabled:border-error-200',
      gradient:
        'enabled:bg-gradient-to-r from-error-600 via-error-500 to-error-600 bg-[length:200%_auto] text-white border-transparent ring-error-100 enabled:hover:bg-[right_100%] disabled:bg-error-200 disabled:border-error-200',
      light:
        'bg-error-25 text-error-700 border-error-25 ring-error-100 enabled:hover:bg-error-50 enabled:hover:border-error-50 disabled:bg-error-25 disabled:border-error-25 disabled:text-error-300',
      outlined:
        'bg-white text-error-700 border-error-500 ring-error-100 enabled:hover:bg-error-50 disabled:border-error-200 disabled:text-error-300',
      text: 'text-error-700 border-transparent ring-error-100 enabled:hover:border-error-50 enabled:hover:bg-error-50 disabled:text-gray-300',
      link: 'text-error-700 border-transparent enabled:hover:underline disabled:text-gray-300',
    },
    warning: {
      contained:
        'bg-warning-500 text-white border-warning-500 ring-warning-100 enabled:hover:bg-warning-600 enabled:hover:border-warning-600 disabled:bg-warning-200 disabled:border-warning-200',
      gradient:
        'enabled:bg-gradient-to-r from-warning-500 via-warning-400 to-warning-500 bg-[length:200%_auto] text-white border-transparent ring-warning-100 enabled:hover:bg-[right_100%] disabled:bg-warning-200 disabled:border-warning-200',
      light:
        'bg-warning-25 text-warning-600 border-warning-25 ring-warning-100 enabled:hover:bg-warning-50 enabled:hover:border-warning-50 disabled:bg-warning-25 disabled:border-warning-25 disabled:text-warning-200',
      outlined:
        'bg-white text-warning-600 border-warning-400 ring-warning-100 enabled:hover:bg-warning-50 disabled:border-warning-100 disabled:text-warning-200',
      text: 'text-warning-600 border-transparent ring-warning-100 enabled:hover:border-warning-50 enabled:hover:bg-warning-50 disabled:text-gray-300',
      link: 'text-warning-600 border-transparent enabled:hover:underline disabled:text-gray-300',
    },
    success: {
      contained:
        'bg-success-600 text-white border-success-600 ring-success-100 enabled:hover:bg-success-700 enabled:hover:border-success-700 disabled:bg-success-200 disabled:border-success-200',
      gradient:
        'enabled:bg-gradient-to-r from-success-600 via-success-500 to-success-600 bg-[length:200%_auto] text-white border-transparent ring-success-100 enabled:hover:bg-[right_100%] disabled:bg-success-200 disabled:border-success-200',
      light:
        'bg-success-25 text-success-600 border-success-25 ring-success-100 enabled:hover:bg-success-50 enabled:hover:border-success-50 disabled:bg-success-25 disabled:border-success-25 disabled:text-success-300',
      outlined:
        'bg-white text-success-600 border-success-500 ring-success-100 enabled:hover:bg-success-50 disabled:border-success-200 disabled:text-success-300',
      text: 'text-success-600 border-transparent ring-success-100 enabled:hover:border-success-50 enabled:hover:bg-success-50 disabled:text-gray-300',
      link: 'text-success-600 border-transparent enabled:hover:underline disabled:text-gray-300',
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
    xs: 'p-1.5 rounded-md',
    sm: 'p-2 rounded-md',
    md: 'p-2.5 rounded-lg',
    lg: 'p-3 rounded-lg',
    xl: 'p-3.5 rounded-lg',
    '2xl': 'p-4 rounded-lg',
  },
  width: {
    auto: 'w-auto',
    fluid: 'w-full',
  },
}

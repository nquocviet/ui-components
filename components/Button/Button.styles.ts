export const styles = {
  base: 'relative inline-flex justify-center flex-wrap items-center gap-2 outline outline-1 outline-offset-[-1px] cursor-pointer font-medium transition-all duration-500 disabled:cursor-not-allowed',
  colors: {
    primary: {
      contained:
        'bg-primary-600 text-white outline-primary-600 enabled:hover:bg-primary-700 enabled:hover:outline-primary-700 disabled:bg-primary-200 disabled:outline-primary-200',
      gradient:
        'enabled:bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 bg-[length:200%_auto] text-white outline-transparent enabled:hover:bg-[right_100%] disabled:bg-primary-200 disabled:outline-primary-200',
      light:
        'bg-primary-50 text-primary-700 outline-primary-50 enabled:hover:bg-primary-100 enabled:hover:outline-primary-100 disabled:bg-primary-25 disabled:outline-primary-25 disabled:text-primary-300',
      outlined:
        'bg-white text-primary-700 outline-primary-500 enabled:hover:bg-primary-50 disabled:outline-primary-200 disabled:text-primary-300',
      text: 'bg-white text-primary-700 outline-white enabled:hover:outline-primary-50 enabled:hover:bg-primary-50 disabled:text-gray-300',
      link: 'bg-white text-primary-700 outline-white enabled:hover:underline disabled:text-gray-300',
    },
    gray: {
      contained:
        'bg-gray-800 text-white outline-gray-800 enabled:hover:bg-gray-900 enabled:hover:outline-gray-900 disabled:bg-gray-300 disabled:outline-gray-300',
      gradient:
        'enabled:bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-[length:200%_auto] text-white outline-transparent enabled:hover:bg-[right_100%] disabled:bg-gray-300 disabled:outline-gray-300',
      light:
        'bg-gray-100 text-gray-700 outline-gray-100 enabled:hover:bg-gray-200 enabled:hover:outline-gray-200 disabled:bg-gray-50 disabled:outline-gray-50 disabled:text-gray-300',
      outlined:
        'bg-white text-gray-700 outline-gray-500 enabled:hover:bg-gray-100 disabled:outline-gray-200 disabled:text-gray-300',
      text: 'bg-white text-gray-700 outline-white enabled:hover:outline-gray-50 enabled:hover:bg-gray-50 disabled:text-gray-300',
      link: 'bg-white text-gray-700 outline-white enabled:hover:underline disabled:text-gray-300',
    },
    info: {
      contained:
        'bg-info-700 text-white outline-info-700 enabled:hover:bg-info-800 enabled:hover:outline-info-800 disabled:bg-info-200 disabled:outline-info-200',
      gradient:
        'enabled:bg-gradient-to-r from-info-700 via-info-500 to-info-700 bg-[length:200%_auto] text-white outline-transparent enabled:hover:bg-[right_100%] disabled:bg-info-200 disabled:outline-info-200',
      light:
        'bg-info-50 text-info-500 outline-info-50 enabled:hover:bg-info-100 enabled:hover:outline-info-100 disabled:bg-info-25 disabled:outline-info-25 disabled:text-info-300',
      outlined:
        'bg-white text-info-600 outline-info-500 enabled:hover:bg-info-50 disabled:outline-info-200 disabled:text-info-300',
      text: 'bg-white text-info-600 outline-white enabled:hover:outline-info-50 enabled:hover:bg-info-50 disabled:text-gray-300',
      link: 'bg-white text-info-600 outline-white enabled:hover:underline disabled:text-gray-300',
    },
    error: {
      contained:
        'bg-error-600 text-white outline-error-600 enabled:hover:bg-error-700 enabled:hover:outline-error-700 disabled:bg-error-200 disabled:outline-error-200',
      gradient:
        'enabled:bg-gradient-to-r from-error-600 via-error-500 to-error-600 bg-[length:200%_auto] text-white outline-transparent enabled:hover:bg-[right_100%] disabled:bg-error-200 disabled:outline-error-200',
      light:
        'bg-error-50 text-error-700 outline-error-50 enabled:hover:bg-error-100 enabled:hover:outline-error-100 disabled:bg-error-25 disabled:outline-error-25 disabled:text-error-300',
      outlined:
        'bg-white text-error-700 outline-error-500 enabled:hover:bg-error-50 disabled:outline-error-200 disabled:text-error-300',
      text: 'bg-white text-error-700 outline-white enabled:hover:outline-error-50 enabled:hover:bg-error-50 disabled:text-gray-300',
      link: 'bg-white text-error-700 outline-white enabled:hover:underline disabled:text-gray-300',
    },
    warning: {
      contained:
        'bg-warning-500 text-white outline-warning-500 enabled:hover:bg-warning-600 enabled:hover:outline-warning-600 disabled:bg-warning-200 disabled:outline-warning-200',
      gradient:
        'enabled:bg-gradient-to-r from-warning-500 via-warning-400 to-warning-500 bg-[length:200%_auto] text-white outline-transparent enabled:hover:bg-[right_100%] disabled:bg-warning-200 disabled:outline-warning-200',
      light:
        'bg-warning-50 text-warning-600 outline-warning-50 enabled:hover:bg-warning-100 enabled:hover:outline-warning-100 disabled:bg-warning-25 disabled:outline-warning-25 disabled:text-warning-200',
      outlined:
        'bg-white text-warning-600 outline-warning-400 enabled:hover:bg-warning-50 disabled:outline-warning-100 disabled:text-warning-200',
      text: 'bg-white text-warning-600 outline-white enabled:hover:outline-warning-50 enabled:hover:bg-warning-50 disabled:text-gray-300',
      link: 'bg-white text-warning-600 outline-white enabled:hover:underline disabled:text-gray-300',
    },
    success: {
      contained:
        'bg-success-600 text-white outline-success-600 enabled:hover:bg-success-700 enabled:hover:outline-success-700 disabled:bg-success-200 disabled:outline-success-200',
      gradient:
        'enabled:bg-gradient-to-r from-success-600 via-success-500 to-success-600 bg-[length:200%_auto] text-white outline-transparent enabled:hover:bg-[right_100%] disabled:bg-success-200 disabled:outline-success-200',
      light:
        'bg-success-50 text-success-600 outline-success-50 enabled:hover:bg-success-100 enabled:hover:outline-success-100 disabled:bg-success-25 disabled:outline-success-25 disabled:text-success-300',
      outlined:
        'bg-white text-success-600 outline-success-500 enabled:hover:bg-success-50 disabled:outline-success-200 disabled:text-success-300',
      text: 'bg-white text-success-600 outline-white enabled:hover:outline-success-50 enabled:hover:bg-success-50 disabled:text-gray-300',
      link: 'bg-white text-success-600 outline-white enabled:hover:underline disabled:text-gray-300',
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

export const styles = {
  base: 'flex w-full items-center gap-2 my-2',
  types: {
    single:
      'after:border-t after:border-gray-200 before:border-t before:border-gray-200',
    dual: 'py-2.5 border-t border-b border-gray-200',
    filled: 'py-2.5 bg-gray-50',
  },
  aligns: {
    left: 'after:grow before:w-[10%]',
    center: 'after:grow before:grow',
    right: 'after:w-[10%] before:grow',
  },
}

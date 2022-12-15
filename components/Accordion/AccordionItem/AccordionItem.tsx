import React, { createContext } from 'react'
import clsx from 'clsx'
import { AccordionItemProps } from './AccordionItem.types'

export const AccordionItemContext = createContext<{
  value: string
} | null>(null)

const AccordionItem: React.FunctionComponent<AccordionItemProps> = ({
  children,
  value,
  className,
  ...rest
}) => {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className={clsx('border-b border-gray-300', className)} {...rest}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

AccordionItem.displayName = 'AccordionItem'

export default AccordionItem

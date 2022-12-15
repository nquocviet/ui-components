import React, { useContext } from 'react'
import clsx from 'clsx'
import { ArrowDown } from 'phosphor-react'
import { Stack } from '@/components'
import { AccordionControlProps } from './AccordionControl.types'
import { AccordionContext } from '../Accordion'
import { AccordionItemContext } from '../AccordionItem'

const AccordionControl: React.FunctionComponent<AccordionControlProps> = ({
  children,
  icon,
  chevron,
  disabled,
  className,
  ...rest
}) => {
  const accordionContext = useContext(AccordionContext)
  const accordionItemContext = useContext(AccordionItemContext)

  if (!accordionContext || !accordionItemContext) return null

  const { panelOpened, setPanelOpened } = accordionContext
  const { value } = accordionItemContext

  const isExpanded =
    typeof panelOpened === 'string'
      ? panelOpened === value
      : panelOpened.includes(value || '')

  return (
    <Stack
      align='center'
      wrap='nowrap'
      className={clsx('cursor-pointer py-4', className)}
      onClick={() => setPanelOpened(value)}
      {...rest}
    >
      {icon && <span className='mr-3'>{icon}</span>}
      {children}
      <span className={clsx('ml-auto', isExpanded && 'rotate-180')}>
        {chevron ? (
          chevron
        ) : (
          <ArrowDown size={20} weight='bold' className='text-gray-500' />
        )}
      </span>
    </Stack>
  )
}

AccordionControl.displayName = 'AccordionControl'

export default AccordionControl

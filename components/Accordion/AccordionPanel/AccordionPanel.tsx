import React, { useContext } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { AccordionPanelProps } from './AccordionPanel.types'
import { AccordionContext } from '../Accordion'
import { AccordionItemContext } from '../AccordionItem'

const variants = {
  expanded: { height: 'auto' },
  collapsed: { height: '0' },
}

const AccordionPanel: React.FunctionComponent<AccordionPanelProps> = ({
  children,
  className,
  ...rest
}) => {
  const accordionContext = useContext(AccordionContext)
  const accordionItemContext = useContext(AccordionItemContext)

  if (!accordionContext || !accordionItemContext) return null

  const { panelOpened } = accordionContext
  const { value } = accordionItemContext

  const isExpanded =
    typeof panelOpened === 'string'
      ? panelOpened === value
      : panelOpened.includes(value || '')

  return (
    <motion.div
      initial='collapsed'
      animate={isExpanded ? 'expanded' : 'collapsed'}
      variants={variants}
      className={clsx('-mt-1 overflow-hidden text-gray-600', className)}
    >
      <div className='mb-4' {...rest}>
        {children}
      </div>
    </motion.div>
  )
}

AccordionPanel.displayName = 'AccordionPanel'

export default AccordionPanel

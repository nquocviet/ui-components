import React, { createContext, forwardRef, useEffect, useState } from 'react'
import { ForwardRefWithStaticComponent } from '@/utils'
import { AccordionProps } from './Accordion.types'
import AccordionItem from './AccordionItem'
import AccordionControl from './AccordionControl'
import AccordionPanel from './AccordionPanel'
import clsx from 'clsx'

type AccordionComponent = ForwardRefWithStaticComponent<
  AccordionProps,
  {
    Item: typeof AccordionItem
    Control: typeof AccordionControl
    Panel: typeof AccordionPanel
  }
>

export const AccordionContext = createContext<{
  panelOpened: string | string[]
  setPanelOpened: (value: string) => void
} | null>(null)

const Accordion: AccordionComponent = forwardRef<
  HTMLDivElement,
  AccordionProps
>(
  (
    { children, value, defaultValue, multiple, className, onChange, ...rest },
    ref
  ) => {
    const [panelOpened, setPanelOpened] = useState<string | string[]>(
      defaultValue ? defaultValue : multiple ? [] : ''
    )

    useEffect(() => {
      if (multiple) {
        setPanelOpened(defaultValue || [])
      }
    }, [multiple])

    const handleChangePanel = (value: string) => {
      if (multiple && Array.isArray(panelOpened)) {
        const panelState = panelOpened.includes(value)
          ? panelOpened.filter((panel) => panel !== value)
          : [...panelOpened, value]

        setPanelOpened(panelState)
        onChange && onChange(panelState)
        return
      }

      const panelState = panelOpened === value ? '' : value

      setPanelOpened(panelState)
      onChange && onChange(panelState)
    }

    return (
      <AccordionContext.Provider
        value={{ panelOpened, setPanelOpened: handleChangePanel }}
      >
        <div className={clsx(className)} ref={ref} {...rest}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
) as any

Accordion.Item = AccordionItem
Accordion.Control = AccordionControl
Accordion.Panel = AccordionPanel
Accordion.displayName = 'Accordion'

export default Accordion

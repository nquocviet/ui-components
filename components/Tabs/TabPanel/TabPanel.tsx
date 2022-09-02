import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { TabPanelProps } from './TabPanel.types'
import { styles } from './TabPanel.styles'

const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  (
    { children, key, label, disabled = false, count, className, ...rest },
    ref
  ) => {
    return (
      <div
        className={clsx(styles.base, className)}
        role='tabpanel'
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

TabPanel.displayName = 'TabPanel'

export default TabPanel

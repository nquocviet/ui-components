import React, { forwardRef, useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { styles } from './Tooltip.styles'
import { TooltipProps } from './Tooltip.types'

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      theme = 'dark',
      title,
      description,
      autoAdjustOverflow = true,
      placement = 'top',
      maxWidth = 320,
      mouseEnterDelay = 300,
      zIndex = null,
      className,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(
      styles.base,
      styles.themes[theme],
      styles.placements[placement],
      !zIndex && 'z-sticky',
      className
    )
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [delayHandler, setDelayHandler] = useState<any>(null)

    const handleMouseEnter = () => {
      setDelayHandler(
        setTimeout(() => {
          setIsHovered(true)
        }, mouseEnterDelay)
      )
    }

    const handleMouseLeave = () => {
      clearTimeout(delayHandler)
      setIsHovered(false)
    }

    return (
      <div
        className='relative'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className={allClassNames}
              style={{ maxWidth: `${maxWidth}px`, ...(zIndex && { zIndex }) }}
            >
              <div className='flex flex-col gap-1 text-sm'>
                <div className='font-semibold'>{title}</div>
                {description && <div>{description}</div>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

Tooltip.displayName = 'Tooltip'

export default Tooltip

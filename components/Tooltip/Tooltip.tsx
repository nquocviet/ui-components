import React, { forwardRef, useState } from 'react'
import clsx from 'clsx'
import { Popover } from '@/components'
import { styles } from './Tooltip.styles'
import { TooltipProps } from './Tooltip.types'
import { useWindowEvent } from '@/hooks'

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      theme = 'dark',
      content,
      description,
      autoAdjustOverflow = true,
      placement = {
        vertical: 'top',
        horizontal: 'center',
      },
      maxWidth = 320,
      mouseEnterDelay = 300,
      zIndex = null,
      className,
      containerClassName,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(styles.base, styles.themes[theme], className)
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [delayHandler, setDelayHandler] = useState<any>(null)

    const handleScroll = () => setIsHovered(false)

    useWindowEvent('scroll', handleScroll, isHovered)

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
      <Popover
        open={isHovered}
        placement={placement}
        popover={
          <div className='flex flex-col gap-1 text-sm'>
            <div className='font-semibold'>{content}</div>
            {description && <div>{description}</div>}
          </div>
        }
        zIndex={zIndex}
        className={allClassNames}
        containerClassName={containerClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </Popover>
    )
  }
)

Tooltip.displayName = 'Tooltip'

export default Tooltip

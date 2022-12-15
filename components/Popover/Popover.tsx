import React, { useState, useEffect, useRef, forwardRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Portal } from '@/components'
import { useOnScreen } from '@/hooks'
import clsx from 'clsx'
import { PopoverProps } from './Popover.types'

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      children,
      popover,
      open,
      placement = {
        vertical: 'bottom',
        horizontal: 'right',
      },
      duration = 0.25,
      zIndex,
      className,
      containerClassName,
      ...rest
    },
    ref
  ) => {
    const [position, setPosition] = useState({
      top: 0,
      left: 0,
    })
    const containerRef = useRef<HTMLDivElement>(null)
    const popoverRef = useRef<HTMLDivElement>(null)
    const isIntersecting = useOnScreen(containerRef)
    const isReady = position.top !== 0 && position.left !== 0
    const SPACING = 4

    useEffect(() => {
      const handleResize = () => {
        if (containerRef.current && popoverRef.current) {
          const containerRect = containerRef.current.getBoundingClientRect()
          const { width, height } = popoverRef.current.getBoundingClientRect()

          const vertical = {
            top: containerRect.top - height - SPACING,
            bottom: containerRect.top + containerRect.height + SPACING,
          }
          const horizontal = {
            left: containerRect.left,
            right: containerRect.left - width + containerRect.width,
            center: containerRect.left,
          }

          setPosition({
            top: vertical[placement.vertical],
            left: horizontal[placement.horizontal],
            ...(placement.horizontal === 'center' && {
              transform: `translateX(calc(-50% + ${
                containerRect.width / 2
              }px))`,
            }),
          })
        }
      }

      setTimeout(() => handleResize(), 0)

      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [open, isIntersecting])

    return (
      <div
        className={clsx('relative leading-[0.5]', containerClassName)}
        ref={containerRef}
        {...rest}
      >
        {children}
        <AnimatePresence>
          {open && (
            <Portal ref={ref}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration }}
                className={clsx(
                  'fixed w-auto',
                  !zIndex && 'z-popover',
                  className
                )}
                style={{
                  ...(zIndex && { zIndex }),
                  ...position,
                }}
                ref={popoverRef}
              >
                {isReady ? (
                  popover
                ) : (
                  <div className='invisible opacity-0'>{popover}</div>
                )}
              </motion.div>
            </Portal>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

Popover.displayName = 'Popover'

export default Popover

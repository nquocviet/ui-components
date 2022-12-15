import React, { forwardRef, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { DrawerProps } from './Drawer.types'
import { Box, Overlay, Portal } from '@/components'
import { useOnClickOutside, useWindowScroll } from '@/hooks'

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      children,
      open,
      disableScrollLock = true,
      width = 300,
      className,
      toggle,
      ...rest
    },
    ref
  ) => {
    const drawerRef = useRef<HTMLElement>(null)
    const [position, scrollTo] = useWindowScroll()

    useOnClickOutside(drawerRef, () => toggle())

    useEffect(() => {
      if (open && disableScrollLock) {
        document.body.style.cssText = `
          position: fixed;
          top: ${-position.y}px;
          left: 0px;
          bottom: 0px;
          right: 0px;
          overflow: hidden;
          overflow-y: scroll;
        `

        return () => {
          document.body.removeAttribute('style')
          scrollTo({
            y: position.y,
            behavior: 'auto',
          })
        }
      }
    }, [open])

    return (
      <Portal>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.15,
              }}
              className='fixed inset-0 z-drawer'
            >
              <motion.aside
                initial={{ translateX: '-100%' }}
                animate={{ translateX: 0 }}
                exit={{ translateX: '-100%' }}
                transition={{
                  duration: 0.2,
                }}
                className={clsx(
                  'absolute left-0 top-0 bottom-0 z-elevate overflow-y-auto bg-white shadow-lg',
                  className
                )}
                style={{ width }}
                ref={drawerRef}
              >
                <Box ref={ref} {...rest}>
                  {children}
                </Box>
              </motion.aside>
              <Box className='absolute inset-0'>
                <Overlay zIndex={0} />
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    )
  }
)

Drawer.displayName = 'Drawer'

export default Drawer

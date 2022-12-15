import React, { forwardRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, Button, Portal, Overlay } from '@/components'
import { ModalProps } from './Modal.types'
import clsx from 'clsx'
import { X } from 'phosphor-react'
import { useWindowScroll } from '@/hooks'

const paddings = {
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      open,
      padding = 'md',
      closable = true,
      centered = false,
      preventClickOutside = false,
      disableScrollLock = true,
      zIndex = null,
      className,
      toggle,
      ...rest
    },
    ref
  ) => {
    const [position, scrollTo] = useWindowScroll()

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
              className={clsx(
                'fixed inset-0 z-modal flex justify-center px-4',
                centered ? 'items-center' : 'items-start py-12'
              )}
            >
              <motion.div
                initial={{ scale: 0.75 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.75 }}
                transition={{
                  duration: 0.2,
                }}
                className={clsx(
                  'relative z-elevate box-content rounded-md bg-white shadow-lg',
                  padding && paddings[padding],
                  className
                )}
              >
                <Box ref={ref} {...rest}>
                  {children}
                </Box>
                {closable && (
                  <Button
                    variant='text'
                    color='gray'
                    size='xs'
                    className='absolute top-3 right-3'
                    onClick={toggle}
                    onlyIcon
                  >
                    <X size={20} />
                  </Button>
                )}
              </motion.div>
              <Box
                className='absolute inset-0'
                onClick={() => {
                  if (preventClickOutside) return
                  toggle()
                }}
              >
                <Overlay zIndex={0} />
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    )
  }
)

Modal.displayName = 'Modal'

export default Modal

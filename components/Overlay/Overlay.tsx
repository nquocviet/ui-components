import React, { forwardRef } from 'react'
import clsx from 'clsx'
import Box from '../Box'
import { OverlayProps } from './Overlay.types'
import { styles } from './Overlay.styles'

const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  (
    {
      children,
      rounded = 'none',
      color,
      opacity = 0.5,
      zIndex = null,
      className,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(
      styles.base,
      styles.rounded[rounded],
      !zIndex && 'z-popover'
    )

    return (
      <Box
        className={allClassNames}
        style={{
          opacity,
          backgroundColor: color ? color : 'rgb(var(--black))',
          ...(zIndex && { zIndex }),
        }}
        ref={ref}
        {...rest}
      >
        {children}
      </Box>
    )
  }
)

Overlay.displayName = 'Overlay'

export default Overlay

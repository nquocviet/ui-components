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
      opacity,
      blur,
      zIndex = null,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(
      styles.base,
      styles.rounded[rounded],
      !zIndex !== null && 'z-popover'
    )
    const overlay = (
      <Box
        className={allClassNames}
        style={{
          opacity: opacity || 0.4,
          backgroundColor: color ? color : 'rgb(var(--black))',
          ...(zIndex !== null && { zIndex }),
          ...style,
        }}
        ref={ref}
        {...rest}
      >
        {children}
      </Box>
    )

    if (blur) {
      return (
        <Box
          className={clsx('absolute inset-0', !zIndex !== null && 'z-popover')}
          style={{
            backdropFilter: `blur(${blur})`,
            ...(zIndex !== null && { zIndex }),
          }}
        >
          {overlay}
        </Box>
      )
    }

    return overlay
  }
)

Overlay.displayName = 'Overlay'

export default Overlay

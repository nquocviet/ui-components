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
      !zIndex && 'z-popover'
    )
    const overlay = (
      <Box
        className={allClassNames}
        style={{
          opacity: opacity || 0.5,
          backgroundColor: color ? color : 'rgb(var(--black))',
          ...(zIndex && { zIndex }),
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
          className={clsx('absolute inset-0', !zIndex && 'z-popover')}
          style={{
            backdropFilter: `blur(${blur})`,
            ...(zIndex && { zIndex }),
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

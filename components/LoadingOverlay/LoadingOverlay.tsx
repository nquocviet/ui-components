import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { LoadingOverlayProps } from './LoadingOverlay.types'
import { Box, Overlay, Spinner } from '@/components'
import { styles } from './LoadingOverlay.styles'

const LoadingOverlay = forwardRef<HTMLDivElement, LoadingOverlayProps>(
  (
    {
      type = 'dash',
      visible,
      loader,
      loaderProps,
      loaderSizes = 'xl',
      overlayOpacity = null,
      overlayBlur = null,
      overlayColor = null,
      overlayZIndex = null,
      zIndex = null,
      className,
      ...rest
    },
    ref
  ) => {
    const allClassNames = clsx(styles.base, className, !zIndex && 'z-popover')

    return visible ? (
      <Box
        className={allClassNames}
        style={{ ...(zIndex && { zIndex }) }}
        ref={ref}
        {...rest}
      >
        {loader ? (
          loader
        ) : (
          <>
            <Spinner
              size={loaderSizes}
              type={type}
              style={{
                zIndex: `calc(${overlayZIndex || 'var(--z-popover)'} + 1)`,
              }}
            />
          </>
        )}
        <Overlay
          opacity={overlayOpacity}
          blur={overlayBlur}
          color={overlayColor}
          zIndex={overlayZIndex}
          {...loaderProps}
        />
      </Box>
    ) : null
  }
)

LoadingOverlay.displayName = 'LoadingOverlay'

export default LoadingOverlay

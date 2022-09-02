import React, { forwardRef, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { styles } from './AvatarGroup.styles'
import { AvatarGroupProps } from './AvatarGroup.types'

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      variant = 'circular',
      max = 5,
      spacing = 'md',
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const [avatarClassNames, setAvatarClassNames] = useState('')
    const allClassNames = clsx(styles.base, styles.spacings[spacing], className)
    const avatarRef = useRef(null)
    const isOverflow = Array.isArray(children) && children.length > max

    useEffect(() => {
      if (avatarRef && avatarRef.current) {
        setAvatarClassNames((avatarRef.current as any).className)
      }
    }, [])

    return (
      <div className={allClassNames} ref={ref} {...rest}>
        {Array.isArray(children)
          ? children
              .flat(Infinity)
              .filter(Boolean)
              .map((child: any, key) =>
                React.cloneElement(child, {
                  ...child.props,
                  variant,
                  key,
                  ref: avatarRef,
                  className: clsx(
                    'border-2 border-white',
                    child.props.className
                  ),
                })
              )
              .slice(0, max)
          : React.cloneElement(children as any, {
              ...(children as any).props,
              variant,
              ref: avatarRef,
              className: clsx(
                'border-2 border-white',
                (children as any).props.className
              ),
            })}
        {isOverflow && (
          <div
            className={clsx(
              '!font-medium !text-gray-700 !bg-gray-50',
              avatarClassNames
            )}
          >
            +{children.length - max}
          </div>
        )}
      </div>
    )
  }
)

AvatarGroup.displayName = 'AvatarGroup'

export default AvatarGroup

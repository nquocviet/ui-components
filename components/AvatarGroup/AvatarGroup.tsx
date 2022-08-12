import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import clsx from 'clsx'
import { styles } from './AvatarGroup.styles'

type TAvatarGroupVariants = 'circular' | 'rounded' | 'square'

type TAvatarGroupSpacings = 'sm' | 'md' | 'lg'

type TAvatarGroupProps = {
  variant?: TAvatarGroupVariants
  max?: number
  spacing?: TAvatarGroupSpacings
  children: ReactNode[]
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

const AvatarGroup = forwardRef<HTMLDivElement, TAvatarGroupProps>(
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
    const isOverflow = children.length > max

    useEffect(() => {
      if (avatarRef && avatarRef.current) {
        setAvatarClassNames((avatarRef.current as any).className)
      }
    }, [])

    return (
      <div className={allClassNames} ref={ref} {...rest}>
        {children
          .map((child: any, key) =>
            React.cloneElement(child, {
              ...child.props,
              variant,
              key,
              ref: avatarRef,
              className: clsx('border-2 border-white', child.props.className),
            })
          )
          .slice(0, max)}
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

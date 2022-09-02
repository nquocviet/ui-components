import clsx from 'clsx'
import React, { forwardRef, useState } from 'react'
import { styles } from './Tabs.styles'
import { TabsProps } from './Tabs.types'
import { Chip, Stack } from '..'
import TabPanel from './TabPanel'
import { ForwardRefWithStaticComponent } from 'utils/ForwardRefWithStaticComponent'

type TabsComponent = ForwardRefWithStaticComponent<
  TabsProps,
  {
    TabPanel: typeof TabPanel
  }
>

const Tabs: TabsComponent = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      children,
      defaultActiveTab,
      type = 'primary',
      size = 'sm',
      direction = 'horizontal',
      spacing = 8,
      destroyInactiveTab = false,
      fluid,
      className,
      labelClassName,
      labelMinWidth,
      onChange,
      ...rest
    },
    ref
  ) => {
    const [activeTab, setActiveTab] = useState(
      defaultActiveTab || (children[0] as any).key
    )

    const handleChangeTab = (key) => {
      setActiveTab(key)

      onChange && onChange()
    }

    return (
      <div className={styles.directions[direction].tabs} ref={ref} {...rest}>
        <Stack
          justify='flex-start'
          spacing={spacing}
          direction={direction === 'horizontal' ? 'row' : 'column'}
          className={clsx(
            styles.types[type].labelContainer,
            styles.directions[direction].labelContainer
          )}
        >
          {children.map((child: any) => {
            const { props, key } = child
            const isActive = child.key === activeTab

            return (
              <button
                className={clsx(
                  styles.label,
                  styles.types[type].label,
                  styles.sizes[type][size],
                  props.disabled
                    ? styles.types[type].states.disabled
                    : isActive
                    ? styles.types[type].states.active
                    : styles.types[type].states.default,
                  fluid && 'flex-1',
                  labelClassName
                )}
                style={{
                  ...(labelMinWidth && { minWidth: `${labelMinWidth}px` }),
                }}
                type='button'
                role='tab'
                tabIndex={0}
                onClick={() => !props.disabled && handleChangeTab(key)}
              >
                {props.label}
                {props.count && (
                  <Chip
                    color={isActive ? 'primary' : 'gray'}
                    variant='light'
                    size='sm'
                    label={props.count}
                    rounded
                  />
                )}
              </button>
            )
          })}
        </Stack>
        {children.map((child: any) => {
          const isActive = child.key === activeTab

          if (destroyInactiveTab && !isActive) return null

          return React.cloneElement(child, {
            ...child.props,
            className: clsx(
              child.props.className,
              isActive ? 'block' : 'hidden'
            ),
          })
        })}
      </div>
    )
  }
) as any

Tabs.TabPanel = TabPanel
Tabs.displayName = 'Tabs'

export default Tabs

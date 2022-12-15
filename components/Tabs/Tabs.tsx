import React, { forwardRef, useState } from 'react'
import clsx from 'clsx'
import { Chip, Stack } from '@/components'
import { ForwardRefWithStaticComponent } from '@/utils'
import { styles } from './Tabs.styles'
import { TabsProps } from './Tabs.types'
import TabPanel from './TabPanel'

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
      responsive = true,
      className,
      labelClassName,
      labelMinWidth,
      trailing,
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
      <div
        className={clsx(
          styles.directions[direction].tabs,
          direction === 'vertical' && responsive && 'flex-col md:flex-row',
          className
        )}
        ref={ref}
        {...rest}
      >
        <Stack justify='space-between'>
          <Stack
            justify='flex-start'
            align={direction === 'horizontal' ? 'flex-start' : 'stretch'}
            spacing={spacing}
            direction={direction === 'horizontal' ? 'row' : 'column'}
            className={clsx(
              styles.types[type].labelContainer,
              styles.directions[direction].labelContainer,
              direction === 'horizontal' &&
                responsive &&
                'flex-col items-stretch md:flex-row md:items-start',
              type === 'white' && 'p-1'
            )}
          >
            {children.filter(Boolean).map((child: any) => {
              const { props, key } = child
              const isActive = child.key === activeTab

              return (
                <div
                  key={key}
                  className={clsx(
                    fluid &&
                      'flex-1 child:justify-start md:child:justify-center'
                  )}
                >
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
                      labelClassName
                    )}
                    style={{
                      ...(labelMinWidth && { minWidth: `${labelMinWidth}px` }),
                    }}
                    type='button'
                    role='tab'
                    tabIndex={0}
                    onClick={() => {
                      !props.disabled && handleChangeTab(key)
                    }}
                  >
                    {props.icon && props.icon}
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
                </div>
              )
            })}
          </Stack>
          {trailing && trailing}
        </Stack>
        {children.filter(Boolean).map((child: any) => {
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

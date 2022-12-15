import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { ForwardRefWithStaticComponent } from '@/utils'
import Box from '../Box'
import Item from './Item'
import { styles } from './List.styles'
import { ListProps } from './List.types'

type ListComponent = ForwardRefWithStaticComponent<
  ListProps,
  {
    Item: typeof Item
  }
>

const List: ListComponent = forwardRef<
  HTMLUListElement | HTMLOListElement,
  ListProps
>(
  (
    { children, type = 'unordered', withPadding = false, className, ...rest },
    ref
  ) => {
    const allClassNames = clsx(
      styles.types[type],
      withPadding && 'pl-6',
      className
    )

    return (
      <Box
        className={allClassNames}
        component={type === 'unordered' ? 'ul' : 'ol'}
        ref={ref}
        {...rest}
      >
        {children}
      </Box>
    )
  }
) as any

List.Item = Item
List.displayName = 'List'

export default List

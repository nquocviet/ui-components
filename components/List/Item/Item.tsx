import React from 'react'
import { ItemProps } from './Item.types'

const Item: React.FunctionComponent<ItemProps> = ({
  children,
  icon,
  ...rest
}) => {
  return <li {...rest}>{children}</li>
}

export default Item

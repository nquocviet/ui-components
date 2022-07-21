import React, { ReactNode, useState } from 'react'
import { CaretRight, DotsThree } from 'phosphor-react'
import { styles } from './Breadcrumbs.styles'
import { Button } from '../Button'
import clsx from 'clsx'

type TBreadcrumbsType = 'text' | 'line'

type TBreadcrumbsSeparator = 'chevron' | 'slash'

type TBreadcrumbsProps = {
  type?: TBreadcrumbsType
  separator?: TBreadcrumbsSeparator | ReactNode | 'string'
  maxItems?: number
  itemsAfterCollapse?: number
  itemsBeforeCollapse?: number
  children: ReactNode[]
  className?: string
}

const separators = {
  chevron: <CaretRight size={12} />,
  slash: '/',
}

const Breadcrumbs = ({
  type = 'text',
  separator = 'chevron',
  maxItems = 5,
  itemsAfterCollapse = 1,
  itemsBeforeCollapse = 1,
  children,
  className,
}: TBreadcrumbsProps) => {
  const allClassNames = clsx(styles.base, styles.types[type], className)
  const totalItems = children.length
  const shouldCollapsed = totalItems > maxItems
  const [collapsed, setCollapsed] = useState<boolean>(shouldCollapsed)

  return (
    <div className={allClassNames}>
      {children.map((item, index) => {
        const isLastItem = index === totalItems - 1
        const isHidden =
          index >= itemsBeforeCollapse &&
          !(index >= totalItems - itemsAfterCollapse)

        if (index === itemsBeforeCollapse && collapsed) {
          return (
            <>
              <Button
                color='gray'
                variant='link'
                className='bg-gray-200 rounded px-0.5'
                onClick={() => setCollapsed(false)}
              >
                <DotsThree weight='bold' size={14} />
              </Button>
              <div className='text-gray-500'>
                {!isLastItem &&
                  (separators[separator as string]
                    ? separators[separator as string]
                    : separator)}
              </div>
            </>
          )
        }

        if (isHidden && collapsed) {
          return null
        }

        return (
          <>
            <div className={isLastItem ? 'text-primary-700' : 'text-gray-500'}>
              {item}
            </div>
            <div className='text-gray-500'>
              {!isLastItem &&
                (separators[separator as string]
                  ? separators[separator as string]
                  : separator)}
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Breadcrumbs

import React, { forwardRef } from 'react'
import { CheckCircle, Info, WarningCircle } from 'phosphor-react'
import { ModalConfirmProps } from './ModalConfirm.types'
import {
  Box,
  Button,
  Modal,
  HighlightIcon,
  Stack,
  Typography,
} from '@/components'
import { HighlightIconColors } from 'components/HighlightIcon/HighlightIcon.types'
import clsx from 'clsx'

const types = {
  error: {
    icon: WarningCircle,
    color: 'error',
  },
  warning: {
    icon: Info,
    color: 'warning',
  },
  success: {
    icon: CheckCircle,
    color: 'success',
  },
  info: {
    icon: Info,
    color: 'info',
  },
}

const ModalConfirm = forwardRef<HTMLDivElement, ModalConfirmProps>(
  (
    {
      title,
      type = 'success',
      open,
      preventClickOutside = false,
      rejectMessage = 'Cancel',
      confirmMessage = 'Submit',
      children,
      closable,
      toggle,
      onReject,
      onConfirm,
      onOpen,
      onClose,
      ...rest
    },
    ref
  ) => {
    const handleConfirm = () => {
      onConfirm && onConfirm()
      onClose && onClose()
      toggle()
    }

    const handleReject = () => {
      onReject && onReject()
      onClose && onClose()
      toggle()
    }

    return (
      <Modal
        open={open}
        toggle={toggle}
        preventClickOutside={preventClickOutside}
        padding='lg'
        className='max-w-sm'
        closable={closable}
        ref={ref}
        centered
        {...rest}
      >
        <Stack align='center' className='mb-4'>
          <HighlightIcon
            color={types[type].color as HighlightIconColors}
            icon={types[type].icon}
            size='lg'
          />
        </Stack>
        <Typography
          fontSize='text-xl'
          weight='semibold'
          className='text-gray-700 line-clamp-2'
        >
          {title}
        </Typography>
        <Box className='mt-2 mb-6 text-gray-500'>{children}</Box>
        <Stack wrap='nowrap' spacing={12}>
          <Button
            size='lg'
            variant='outlined'
            color='gray'
            onClick={handleReject}
            fluid
          >
            {rejectMessage}
          </Button>
          <Button
            size='lg'
            onClick={handleConfirm}
            className={clsx(
              type === 'error' && '!border-red-600 !bg-red-600 !text-white'
            )}
            fluid
          >
            {confirmMessage}
          </Button>
        </Stack>
      </Modal>
    )
  }
)

export default ModalConfirm

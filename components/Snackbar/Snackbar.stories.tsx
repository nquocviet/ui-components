import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { action } from '@storybook/addon-actions'
import Snackbar from './Snackbar'
import Button from '../Button'

export default {
  title: 'Design System/Components/Snackbar',
  component: Snackbar,
  argTypes: {
    message: {
      description: 'The message of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
    },
    action: {
      description: 'The action of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
    },
    open: {
      description: 'If false, the component will disappear.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: { type: 'boolean' },
    },
    autoHideDuration: {
      description:
        'The number of milliseconds to wait before automatically calling the onClose function. onClose should then set the state of the open prop to hide the component. This behavior is disabled by default with the 0 value.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
      control: { type: 'text' },
    },
    placement: {
      description:
        'The position of the component. On smaller screens, the component grows to occupy all the available width, the horizontal alignment is ignored. This behavior is disabled by default when floating is `false`.',
      table: {
        type: {
          summary:
            "{ horizontal: 'center' | 'left' | 'right', vertical: 'bottom' | 'top' }",
        },
        defaultValue: { summary: "{ horizontal: 'left', vertical: 'bottom' }" },
      },
      control: { type: 'object' },
    },
    zIndex: {
      description: 'Config z-index of component.',
      table: {
        type: { summary: 'number | null' },
        defaultValue: { summary: 'null' },
      },
      control: { type: 'number' },
    },
    className: {
      description: 'Override or extend the styles applied to the component.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Snackbars provide brief notifications. The component is also known as a toast.',
      },
    },
  },
} as ComponentMeta<typeof Snackbar>

const Template: ComponentStory<typeof Snackbar> = (args) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Snackbar</Button>
      <Snackbar open={open} onClose={() => setOpen(false)} {...args} />
    </>
  )
}

export const Message = Template.bind({})
Message.args = {
  message: 'Snackbar message',
  placement: {
    horizontal: 'left',
    vertical: 'bottom',
  },
  zIndex: null,
  className: '',
  onClose: undefined,
}

export const Close = Template.bind({})
Close.args = {
  message: 'Snackbar message',
  placement: {
    horizontal: 'left',
    vertical: 'bottom',
  },
  zIndex: null,
  className: '',
}

export const Action = Template.bind({})
Action.args = {
  message: 'Snackbar message',
  placement: {
    horizontal: 'left',
    vertical: 'bottom',
  },
  zIndex: null,
  className: '',
  onUndo: action('undo'),
}

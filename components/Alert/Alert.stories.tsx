import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Alert from './Alert'

export default {
  title: 'Design System/Components/Alert',
  component: Alert,
  argTypes: {
    color: {
      description: 'The color of the component. It supports by default colors.',
      table: {
        type: { summary: 'primary | gray | info | error | warning | success' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'select',
        options: ['primary', 'gray', 'info', 'error', 'warning', 'success'],
      },
    },
    variant: {
      description: 'The variant to use.',
      table: {
        type: { summary: 'contained | outlined' },
        defaultValue: { summary: 'outlined' },
      },
      control: {
        type: 'select',
        options: ['contained', 'outlined'],
      },
    },
    icon: {
      description:
        'If false, the component will not have the icon. In addition, you can also replace another icon instead.',
      table: {
        type: { summary: 'boolean | node' },
        defaultValue: { summary: 'true' },
      },
      control: { type: 'boolean' },
    },
    title: {
      description: 'The title of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
    },
    description: {
      description: 'The description of the component.',
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
    width: {
      description: 'Set width to the component.',
      table: {
        type: { summary: 'auto | % | vw | px' },
        defaultValue: { summary: 'auto' },
      },
      control: { type: 'text' },
    },
    closeButton: {
      description: 'If true, the component will have a close button.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    floating: {
      description: 'If true, the component will have a position fixed.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
      control: { type: 'number' },
    },
    placement: {
      description:
        'The position of the component. On smaller screens, the component grows to occupy all the available width, the horizontal alignment is ignored. This behavior is disabled by default when floating is `false`.',
      table: {
        type: {
          summary:
            "{ horizontal: 'center' | 'left' | 'right', vertical: 'bottom' | 'top' }",
        },
        defaultValue: { summary: "{ horizontal: 'right', vertical: 'top' }" },
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
          "An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.",
      },
    },
  },
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  variant: 'outlined',
  icon: true,
  title: "We're just released a new feature",
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magni ut velit odio sunt doloribus.',
  action: '',
  open: true,
  width: 'auto',
  closeButton: false,
  floating: false,
  autoHideDuration: 0,
  placement: {
    horizontal: 'right',
    vertical: 'top',
  },
  zIndex: null,
  className: '',
  onClose: action('closed'),
}

export const Gray = Template.bind({})
Gray.args = {
  color: 'gray',
  variant: 'outlined',
  icon: true,
  title: "We're just released a new feature",
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magni ut velit odio sunt doloribus.',
  action: '',
  open: true,
  width: 'auto',
  closeButton: false,
  floating: false,
  autoHideDuration: 0,
  placement: {
    horizontal: 'right',
    vertical: 'top',
  },
  zIndex: null,
  className: '',
  onClose: action('closed'),
}

export const Info = Template.bind({})
Info.args = {
  color: 'info',
  variant: 'outlined',
  icon: true,
  title: "We're just released a new feature",
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magni ut velit odio sunt doloribus.',
  action: '',
  open: true,
  width: 'auto',
  closeButton: false,
  floating: false,
  autoHideDuration: 0,
  placement: {
    horizontal: 'right',
    vertical: 'top',
  },
  zIndex: null,
  className: '',
  onClose: action('closed'),
}

export const Error = Template.bind({})
Error.args = {
  color: 'error',
  variant: 'outlined',
  icon: true,
  title: "We're just released a new feature",
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magni ut velit odio sunt doloribus.',
  action: '',
  open: true,
  width: 'auto',
  closeButton: false,
  floating: false,
  autoHideDuration: 0,
  placement: {
    horizontal: 'right',
    vertical: 'top',
  },
  zIndex: null,
  className: '',
  onClose: action('closed'),
}

export const Warning = Template.bind({})
Warning.args = {
  color: 'warning',
  variant: 'outlined',
  icon: true,
  title: "We're just released a new feature",
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magni ut velit odio sunt doloribus.',
  action: '',
  open: true,
  width: 'auto',
  closeButton: false,
  floating: false,
  autoHideDuration: 0,
  placement: {
    horizontal: 'right',
    vertical: 'top',
  },
  zIndex: null,
  className: '',
  onClose: action('closed'),
}

export const Success = Template.bind({})
Success.args = {
  color: 'success',
  variant: 'outlined',
  icon: true,
  title: "We're just released a new feature",
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magni ut velit odio sunt doloribus.',
  action: '',
  open: true,
  width: 'auto',
  closeButton: false,
  floating: false,
  autoHideDuration: 0,
  placement: {
    horizontal: 'right',
    vertical: 'top',
  },
  zIndex: null,
  className: '',
  onClose: action('closed'),
}

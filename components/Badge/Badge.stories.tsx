import { ComponentMeta, ComponentStory } from '@storybook/react'
import Badge from './Badge'
import { BellSimple } from 'phosphor-react'

export default {
  title: 'Design System/Components/Badge',
  component: Badge,
  argTypes: {
    size: {
      description: 'The size of the component.',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    dotSize: {
      description: 'The size of the dot.',
      table: {
        type: { summary: 'xs | sm | md | lg | xl | 2xl' },
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      },
    },
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
    badgeContent: {
      description: 'The content rendered within the badge.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
    },
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
    },
    variant: {
      description: 'The variant to use.',
      table: {
        type: {
          summary: 'standard | dot',
        },
        defaultValue: { summary: 'standard' },
      },
      control: {
        type: 'select',
        options: ['standard', 'dot'],
      },
    },
    maxCount: {
      description: 'Max count to show.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 99 },
      },
      control: { type: 'number' },
    },
    placement: {
      description: 'The position of the component.',
      table: {
        type: {
          summary:
            "{ horizontal: 'left' | 'right', vertical: 'bottom' | 'top' }",
        },
        defaultValue: { summary: "{ horizontal: 'right', vertical: 'top' }" },
      },
      control: { type: 'object' },
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
          'Badge generates a small badge to the top-right of its child(ren).',
      },
    },
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'standard',
  size: 'md',
  dotSize: 'md',
  color: 'primary',
  badgeContent: 100,
  children: <BellSimple size={28} />,
  maxCount: 99,
  placement: {
    horizontal: 'right',
    vertical: 'top',
  },
  className: '',
}

export const Gray = Template.bind({})
Gray.args = {
  variant: 'standard',
  size: 'md',
  dotSize: 'md',
  color: 'gray',
  badgeContent: 100,
  children: <BellSimple size={28} />,
  maxCount: 99,
  placement: {
    horizontal: 'right',
    vertical: 'top',
  },
  className: '',
}

export const Info = Template.bind({})
Info.args = {
  variant: 'standard',
  size: 'md',
  dotSize: 'md',
  color: 'info',
  badgeContent: 100,
  children: <BellSimple size={28} />,
  maxCount: 99,
  placement: {
    horizontal: 'right',
    vertical: 'top',
  },
  className: '',
}

export const Error = Template.bind({})
Error.args = {
  variant: 'standard',
  size: 'md',
  dotSize: 'md',
  color: 'error',
  badgeContent: 100,
  children: <BellSimple size={28} />,
  maxCount: 99,
  placement: {
    horizontal: 'right',
    vertical: 'top',
  },
  className: '',
}

export const Warning = Template.bind({})
Warning.args = {
  variant: 'standard',
  size: 'md',
  dotSize: 'md',
  color: 'warning',
  badgeContent: 100,
  children: <BellSimple size={28} />,
  maxCount: 99,
  placement: {
    horizontal: 'right',
    vertical: 'top',
  },
  className: '',
}

export const Success = Template.bind({})
Success.args = {
  variant: 'standard',
  size: 'md',
  dotSize: 'md',
  color: 'success',
  badgeContent: 100,
  children: <BellSimple size={28} />,
  maxCount: 99,
  placement: {
    horizontal: 'right',
    vertical: 'top',
  },
  className: '',
}

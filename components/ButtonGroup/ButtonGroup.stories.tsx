import { ComponentMeta, ComponentStory } from '@storybook/react'
import ButtonGroup from './ButtonGroup'
import Button from '../Button'

export default {
  title: 'Design System/Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
    },
    size: {
      description: 'The size of the component.',
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
    variant: {
      description: 'The variant to use.',
      table: {
        type: {
          summary: 'contained | light | outlined | text',
        },
        defaultValue: { summary: 'contained' },
      },
      control: {
        type: 'select',
        options: ['contained', 'light', 'outlined', 'text'],
      },
    },
    fluid: {
      description:
        'If true, the component will take up the full width of its container.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    disabled: {
      description: 'If true, the component is disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
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
          'The ButtonGroup component can be used to group related buttons.',
      },
    },
  },
} as ComponentMeta<typeof ButtonGroup>

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </ButtonGroup>
)

export const Primary = Template.bind({})
Primary.args = {
  size: 'md',
  color: 'primary',
  variant: 'contained',
  className: '',
  fluid: false,
  disabled: false,
}

export const Gray = Template.bind({})
Gray.args = {
  size: 'md',
  color: 'gray',
  variant: 'contained',
  className: '',
  fluid: false,
  disabled: false,
}

export const Info = Template.bind({})
Info.args = {
  size: 'md',
  color: 'info',
  variant: 'contained',
  className: '',
  fluid: false,
  disabled: false,
}

export const Error = Template.bind({})
Error.args = {
  size: 'md',
  color: 'error',
  variant: 'contained',
  className: '',
  fluid: false,
  disabled: false,
}

export const Warning = Template.bind({})
Warning.args = {
  size: 'md',
  color: 'warning',
  variant: 'contained',
  className: '',
  fluid: false,
  disabled: false,
}

export const Success = Template.bind({})
Success.args = {
  size: 'md',
  color: 'success',
  variant: 'contained',
  className: '',
  fluid: false,
  disabled: false,
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import Dots from './Dots'

export default {
  title: 'Design System/Components/Dots',
  component: Dots,
  argTypes: {
    size: {
      description: 'The size of the component.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 6 },
      },
      control: { type: 'number' },
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
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
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
        component: 'Generate a small dot for content.',
      },
    },
  },
} as ComponentMeta<typeof Dots>

const Template: ComponentStory<typeof Dots> = (args) => <Dots {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 12,
  color: 'primary',
  children: '',
  className: '',
}

export const Gray = Template.bind({})
Gray.args = {
  size: 12,
  color: 'gray',
  children: '',
  className: '',
}

export const Info = Template.bind({})
Info.args = {
  size: 12,
  color: 'info',
  children: '',
  className: '',
}

export const Error = Template.bind({})
Error.args = {
  size: 12,
  color: 'error',
  children: '',
  className: '',
}

export const Warning = Template.bind({})
Warning.args = {
  size: 12,
  color: 'warning',
  children: '',
  className: '',
}

export const Success = Template.bind({})
Success.args = {
  size: 12,
  color: 'success',
  children: '',
  className: '',
}

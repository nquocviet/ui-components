import { ComponentMeta, ComponentStory } from '@storybook/react'
import HighlightIcon from '@/components/HighlightIcon'
import { Lightbulb } from 'phosphor-react'

export default {
  title: 'Design System/Components/HighlightIcon',
  component: HighlightIcon,
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
    icon: {
      description: 'The icon to display.',
      table: {
        type: { summary: 'node' },
      },
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
        component: 'Button component for user interaction.',
      },
    },
  },
} as ComponentMeta<typeof HighlightIcon>

const Template: ComponentStory<typeof HighlightIcon> = (args) => (
  <HighlightIcon {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  size: 'md',
  icon: <Lightbulb />,
  className: '',
}

export const Gray = Template.bind({})
Gray.args = {
  color: 'gray',
  size: 'md',
  icon: <Lightbulb />,
  className: '',
}

export const Info = Template.bind({})
Info.args = {
  color: 'info',
  size: 'md',
  icon: <Lightbulb />,
  className: '',
}

export const Error = Template.bind({})
Error.args = {
  color: 'error',
  size: 'md',
  icon: <Lightbulb />,
  className: '',
}

export const Warning = Template.bind({})
Warning.args = {
  color: 'warning',
  size: 'md',
  icon: <Lightbulb />,
  className: '',
}

export const Success = Template.bind({})
Success.args = {
  color: 'success',
  size: 'md',
  icon: <Lightbulb />,
  className: '',
}

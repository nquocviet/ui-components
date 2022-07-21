import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Spinner } from '@/components/Spinner'

export default {
  title: 'Design System/Components/Spinner',
  component: Spinner,
  argTypes: {
    type: {
      description: 'The type of the component.',
      table: {
        type: {
          summary: 'circle | tail | dots',
        },
        defaultValue: { summary: 'circle' },
      },
      control: {
        type: 'select',
        options: ['circle', 'tail', 'dots'],
      },
    },
    size: {
      description: 'The size of the component.',
      table: {
        type: { summary: 'xs | sm | md | lg | xl' },
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
    },
    className: {
      description:
        'Override or extend the styles applied to the container of component.',
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
          'A spinner for displaying loading state of a page or a section.',
      },
    },
  },
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const Circular = Template.bind({})
Circular.args = {
  type: 'circular',
  className: '',
  size: 'md',
}

export const Dash = Template.bind({})
Dash.args = {
  type: 'dash',
  className: '',
  size: 'md',
}

export const Dots = Template.bind({})
Dots.args = {
  type: 'dots',
  className: '',
  size: 'md',
}

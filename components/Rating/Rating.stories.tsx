import { ComponentMeta, ComponentStory } from '@storybook/react'
import Rating from './Rating'

export default {
  title: 'Design System/Components/Rating',
  component: Rating,
  argTypes: {
    defaultValue: {
      description:
        'The default value. Use when the component is not controlled.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
      control: { type: 'number' },
    },
    precision: {
      description:
        'The default value. Use when the component is not controlled.',
      table: {
        type: { summary: 'full | half' },
        defaultValue: { summary: 'full' },
      },
      control: {
        type: 'select',
        options: ['full', 'half'],
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
    disabled: {
      description: 'If `true`, the component is disabled.',
      table: {
        type: { summary: 'boolean' },
      },
      control: { type: 'boolean' },
    },
    readOnly: {
      description:
        'If `true`, the component will removes all hover effects and pointer events.',
      table: {
        type: { summary: 'boolean' },
      },
      control: { type: 'boolean' },
    },
    max: {
      description: 'Maximum rating.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 },
      },
      control: { type: 'number' },
    },
    color: {
      description: 'The color of the component. It supports by default colors.',
      table: {
        type: { summary: 'text' },
      },
      control: {
        type: 'text',
      },
    },
    icon: {
      description: 'The icon to display.',
      table: {
        type: { summary: 'node' },
      },
    },
    emptyIcon: {
      description: 'The icon to display when empty.',
      table: {
        type: { summary: 'node' },
      },
    },
    leading: {
      description: 'Element placed before the children.',
      table: {
        type: { summary: 'node' },
      },
    },
    trailing: {
      description: 'Element placed after the children.',
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
        component:
          "Ratings provide insight regarding other's opinions and experiences, and can allow the user to submit a rating of their own.",
      },
    },
  },
} as ComponentMeta<typeof Rating>

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />

export const Default = Template.bind({})
Default.args = {
  max: 5,
  defaultValue: 1,
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  max: 5,
  defaultValue: 1,
  readOnly: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  max: 5,
  defaultValue: 1,
  disabled: true,
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Toggle } from '@/components/Toggle'

export default {
  title: 'Design System/Components/Toggle',
  component: Toggle,
  argTypes: {
    size: {
      description: 'The size of the component.',
      table: {
        type: { summary: 'sm | md | lg | number' },
        defaultValue: { summary: 'md' },
      },
      control: { type: 'text' },
    },
    spacing: {
      description:
        'The spacing between component container and toggle handle of the component.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 2 },
      },
      control: { type: 'number' },
    },
    theme: {
      description: 'The theme of the component. It supports by default colors.',
      table: {
        type: { summary: 'light | dark' },
        defaultValue: { summary: 'dark' },
      },
      control: { type: 'select', options: ['light', 'dark'] },
    },
    label: {
      description: 'A text to be used in describe the label of component.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    description: {
      description:
        'A text to be used in describe the description of component.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    className: {
      description:
        'Override or extend the styles applied to the container of component.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    checked: {
      description: 'If true, the component is checked.',
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
  },
  parameters: {
    docs: {
      description: {
        component: 'Toggle the state of a single setting on or off.',
      },
    },
  },
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />

export const Dark = Template.bind({})
Dark.args = {
  size: 'md',
  spacing: 2,
  theme: 'dark',
  label: '',
  description: '',
  className: '',
  defaultChecked: false,
  disabled: false,
  onChange: action('changed'),
}

export const Light = Template.bind({})
Light.args = {
  size: 'md',
  spacing: 2,
  theme: 'light',
  label: '',
  description: '',
  className: '',
  defaultChecked: false,
  disabled: false,
  onChange: action('changed'),
}

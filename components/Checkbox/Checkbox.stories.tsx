import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Checkbox } from '@/components/Checkbox'

export default {
  title: 'Design System/Components/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      description: 'The size of the component.',
      table: {
        type: { summary: 'xs | sm | md | lg | number' },
        defaultValue: { summary: 'md' },
      },
      control: { type: 'text' },
    },
    iconSize: {
      description: 'The size of the check icon.',
      table: {
        type: { summary: 'number' },
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
    value: {
      description:
        'The value of the component. The DOM API casts this to a string. The browser uses "on" as the default value.',
      table: {
        type: { summary: 'any' },
      },
      control: { type: 'text' },
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
    rounded: {
      description: 'If true, the component is rounded.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
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
        component:
          'Checkboxes allow the user to select one or more items from a set..',
      },
    },
  },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

export const Dark = Template.bind({})
Dark.args = {
  size: 'md',
  theme: 'dark',
  value: '',
  label: '',
  description: '',
  className: '',
  rounded: false,
  defaultChecked: false,
  disabled: false,
  onChange: action('changed'),
}

export const Light = Template.bind({})
Light.args = {
  size: 'md',
  theme: 'light',
  value: '',
  label: '',
  description: '',
  className: '',
  rounded: false,
  defaultChecked: false,
  disabled: false,
  onChange: action('changed'),
}

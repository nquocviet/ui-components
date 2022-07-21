import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Radio } from '@/components/Radio'

export default {
  title: 'Design System/Components/Radio',
  component: Radio,
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
    defaultValue: {
      description: 'Set default value to component.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
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
          'Radio buttons allow the user to select one option from a set.',
      },
    },
  },
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Dark = Template.bind({})
Dark.args = {
  size: 'md',
  theme: 'dark',
  name: '',
  value: 'test',
  label: 'Remember me',
  description: 'Save my login details for the next time.',
  className: '',
  defaultValue: '',
  disabled: false,
  onChange: action('changed'),
}

export const Light = Template.bind({})
Light.args = {
  size: 'md',
  theme: 'light',
  name: '',
  value: 'test',
  label: 'Remember me',
  description: 'Save my login details for the next time.',
  className: '',
  defaultValue: '',
  disabled: false,
  onChange: action('changed'),
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Tag from '@/components/Tag'

export default {
  title: 'Design System/Components/Tag',
  component: Tag,
  argTypes: {
    action: {
      description: 'The type of the component.',
      table: {
        type: { summary: 'text | close | count' },
        defaultValue: { summary: 'text' },
      },
      control: { type: 'select', options: ['text', 'close', 'count'] },
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
    theme: {
      description: 'The theme of the checkbox. It supports by default colors.',
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
    count: {
      description: 'Value for count when the component action is `count`.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 },
      },
      control: { type: 'number' },
    },
    hasCheckbox: {
      description: 'If true, the component will have a checkbox.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
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
        component: 'Tag for categorizing or markup.',
      },
    },
  },
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Text = Template.bind({})
Text.args = {
  action: 'text',
  size: 'md',
  theme: 'dark',
  label: 'Label',
  count: 0,
  hasCheckbox: false,
  className: '',
  onClose: action('closed'),
  onCheck: action('checked'),
}

export const Close = Template.bind({})
Close.args = {
  action: 'close',
  size: 'md',
  theme: 'dark',
  label: 'Label',
  count: 0,
  hasCheckbox: false,
  className: '',
  onClose: action('closed'),
  onCheck: action('checked'),
}

export const Count = Template.bind({})
Count.args = {
  action: 'count',
  size: 'md',
  theme: 'dark',
  label: 'Label',
  count: 5,
  hasCheckbox: false,
  className: '',
  onClose: action('closed'),
  onCheck: action('checked'),
}

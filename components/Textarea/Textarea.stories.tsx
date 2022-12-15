import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Textarea from './Textarea'

export default {
  title: 'Design System/Components/Textarea',
  component: Textarea,
  argTypes: {
    size: {
      description: 'The size of the component.',
      table: {
        type: { summary: 'sm | md' },
        defaultValue: { summary: 'sm' },
      },
      control: {
        type: 'select',
        options: ['sm', 'md'],
      },
    },
    name: {
      description: 'Name attribute of the textarea element.',
      table: {
        type: { summary: 'string' },
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
    placeholder: {
      description:
        'The short hint displayed in the textarea before the user enters a value.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    error: {
      description:
        'If error is not empty, the textarea will indicate an error.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    hint: {
      description: 'If hint is not empty, the textarea will indicate a hint.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    required: {
      description:
        'If true, the textarea element is required. The prop defaults to the value (false) inherited from the parent FormControl component.',
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
        component: 'A textarea component for React which grows with content.',
      },
    },
  },
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => (
  <div className='w-1/2'>
    <Textarea {...args} />
  </div>
)

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  name: '',
  label: 'Description',
  placeholder: 'Enter a description...',
  error: '',
  hint: '',
  required: false,
  disabled: false,
  className: '',
  onChange: action('changed'),
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  name: '',
  label: 'Description',
  placeholder: 'Enter a description...',
  error: '',
  hint: '',
  required: false,
  disabled: false,
  className: '',
  onChange: action('changed'),
}

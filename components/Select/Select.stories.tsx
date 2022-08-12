import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Select from '@/components/Select'

export default {
  title: 'Design System/Components/Select',
  component: Select,
  argTypes: {
    options: {
      description: 'The options of the component.',
      table: {
        type: { summary: 'array' },
      },
    },
    size: {
      description: 'The size of the component.',
      table: {
        type: { summary: 'sm | md' },
        defaultValue: { summary: 'sm' },
      },
      control: { type: 'text' },
    },
    defaultOption: {
      description:
        'The default value. Use when the component is not controlled.',
      table: {
        type: { summary: 'sm | md' },
        defaultValue: { summary: 'sm' },
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
    name: {
      description: 'Name attribute of the select element.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    placeholder: {
      description:
        'The short hint displayed in the select before the user enters a value.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    maxHeight: {
      description: 'Height of the select dropdown.',
      table: {
        type: { summary: 'number' },
      },
    },
    maxItems: {
      description:
        'Specifies the maximum number of options selected to display. When there are more than the maximum number, only the `+number` will be shown.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 3 },
      },
      control: { type: 'number' },
    },
    disabled: {
      description: 'If true, the component is disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    multiple: {
      description: 'If true, the select element can select multiple options.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    required: {
      description:
        'If true, the select element is required. The prop defaults to the value (false) inherited from the parent FormControl component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    error: {
      description: 'If error is not empty, the select will indicate an error.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
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
          'Select components are used for collecting user provided information from a list of options.',
      },
    },
  },
} as ComponentMeta<typeof Select>

const options = [
  { value: 'value 1', label: 'Option 1' },
  { value: 'value 2', label: 'Option 2' },
  { value: 'value 3', label: 'Option 3' },
  { value: 'value 4', label: 'Option 4' },
  { value: 'value 5', label: 'Option 5' },
]

const Template: ComponentStory<typeof Select> = (args) => (
  <div className='w-2/5 min-h-[40vh]'>
    <Select {...args} />
  </div>
)

export const SingleSelect = Template.bind({})
SingleSelect.args = {
  options,
  size: 'md',
  name: '',
  label: 'Project',
  placeholder: 'Select your own project',
  error: '',
  required: false,
  disabled: false,
  multiple: false,
  maxItems: 3,
  leading: null,
  trailing: null,
  className: '',
  onChange: action('changed'),
}

export const MultipleSelect = Template.bind({})
MultipleSelect.args = {
  options,
  size: 'md',
  name: '',
  label: 'Users',
  placeholder: 'Choose your team',
  error: '',
  required: false,
  disabled: false,
  multiple: true,
  maxItems: 3,
  leading: null,
  trailing: null,
  className: '',
  onChange: action('changed'),
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input from '@/components/Input'
import { EnvelopeSimple, User, Copy } from 'phosphor-react'

const icons = {
  EnvelopeSimple: <EnvelopeSimple size={20} />,
  User: <User size={20} />,
  Copy: <Copy size={20} />,
}

export default {
  title: 'Design System/Components/Input',
  component: Input,
  argTypes: {
    type: {
      description: 'The type of the component.',
      table: {
        type: {
          summary: 'email | text | password',
        },
        defaultValue: { summary: 'text' },
      },
      control: {
        type: 'select',
        options: ['email', 'text', 'password'],
      },
    },
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
      description: 'Name attribute of the input element.',
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
        'The short hint displayed in the input before the user enters a value.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    error: {
      description: 'If error is not empty, the input will indicate an error.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    hint: {
      description: 'If hint is not empty, the input will indicate an hint.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    maxLength: {
      description: 'Maximum number of characters to type.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 255 },
      },
      control: { type: 'number' },
    },
    required: {
      description:
        'If true, the input element is required. The prop defaults to the value (false) inherited from the parent FormControl component.',
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
    trailing: {
      description: 'Element placed after the children.',
      table: {
        type: { summary: 'node' },
      },
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        options: {
          null: null,
          EnvelopeSimple: 'EnvelopeSimple',
          User: 'User',
          Copy: 'Copy',
        },
      },
    },
    leading: {
      description: 'Element placed before the children.',
      table: {
        type: { summary: 'node' },
      },
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        options: {
          null: null,
          EnvelopeSimple: 'EnvelopeSimple',
          User: 'User',
          Copy: 'Copy',
        },
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
          'A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.',
      },
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => (
  <div className='w-1/2'>
    <Input {...args} />
  </div>
)

export const Small = Template.bind({})
Small.args = {
  type: 'text',
  size: 'sm',
  name: '',
  label: 'Email',
  placeholder: 'Type your email',
  error: '',
  hint: '',
  maxLength: 255,
  required: false,
  disabled: false,
  leading: null,
  trailing: null,
  className: '',
  onChange: action('changed'),
}

export const Medium = Template.bind({})
Medium.args = {
  type: 'text',
  size: 'md',
  name: '',
  label: 'Email',
  placeholder: 'Type your email',
  error: '',
  hint: '',
  maxLength: 255,
  required: false,
  disabled: false,
  leading: null,
  trailing: null,
  className: '',
  onChange: action('changed'),
}

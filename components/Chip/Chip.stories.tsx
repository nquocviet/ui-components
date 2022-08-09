import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Chip } from '@/components/Chip'
import { Aperture } from 'phosphor-react'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Design System/Components/Chip',
  component: Chip,
  argTypes: {
    variant: {
      description: 'The variant to use.',
      table: {
        type: {
          summary: 'contained | light | outlined',
        },
        defaultValue: { summary: 'contained' },
      },
      control: {
        type: 'select',
        options: ['contained', 'light', 'outlined'],
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
    label: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
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
          'Chips are compact elements that represent an input, attribute, or action.',
      },
    },
  },
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'contained',
  size: 'md',
  color: 'primary',
  label: 'Chip content',
  leading: <Aperture size={20} />,
  className: '',
  onDelete: action('deleted'),
}

export const Gray = Template.bind({})
Gray.args = {
  variant: 'contained',
  size: 'md',
  color: 'gray',
  label: 'Chip content',
  leading: <Aperture size={20} />,
  className: '',
  onDelete: action('deleted'),
}

export const Info = Template.bind({})
Info.args = {
  variant: 'contained',
  size: 'md',
  color: 'info',
  label: 'Chip content',
  leading: <Aperture size={20} />,
  className: '',
  onDelete: action('deleted'),
}

export const Error = Template.bind({})
Error.args = {
  variant: 'contained',
  size: 'md',
  color: 'error',
  label: 'Chip content',
  leading: <Aperture size={20} />,
  className: '',
  onDelete: action('deleted'),
}

export const Warning = Template.bind({})
Warning.args = {
  variant: 'contained',
  size: 'md',
  color: 'warning',
  label: 'Chip content',
  leading: <Aperture size={20} />,
  className: '',
  onDelete: action('deleted'),
}

export const Success = Template.bind({})
Success.args = {
  variant: 'contained',
  size: 'md',
  color: 'success',
  label: 'Chip content',
  leading: <Aperture size={20} />,
  className: '',
  onDelete: action('deleted'),
}

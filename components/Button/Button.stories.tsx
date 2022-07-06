import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '@/components/Button'
import { ArrowLeft, ArrowRight, CaretLeft, CaretRight } from 'phosphor-react'

const icons = {
  ArrowLeft: <ArrowLeft size={16} weight='bold' />,
  ArrowRight: <ArrowRight size={16} weight='bold' />,
  CaretLeft: <CaretLeft size={16} weight='bold' />,
  CaretRight: <CaretRight size={16} weight='bold' />,
}

export default {
  title: 'Design System/Components/Button',
  component: Button,
  argTypes: {
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
    },
    type: {
      description: 'The type of the component.',
      table: {
        type: {
          summary: 'button | submit | reset',
        },
        defaultValue: { summary: 'button' },
      },
      control: {
        type: 'select',
        options: ['button', 'submit', 'select'],
      },
    },
    size: {
      description: 'The size of the component.',
      table: {
        type: { summary: 'xs | sm | md | lg | xl | 2xl' },
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
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
    variant: {
      description: 'The variant to use.',
      table: {
        type: {
          summary: 'contained | gradient | light | outlined | text | link',
        },
        defaultValue: { summary: 'contained' },
      },
      control: {
        type: 'select',
        options: ['contained', 'gradient', 'light', 'outlined', 'text', 'link'],
      },
    },
    suffix: {
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
          ArrowLeft: 'ArrowLeft',
          ArrowRight: 'ArrowRight',
          CaretLeft: 'CaretLeft',
          CaretRight: 'CaretRight',
        },
      },
    },
    prefix: {
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
          ArrowLeft: 'ArrowLeft',
          ArrowRight: 'ArrowRight',
          CaretLeft: 'CaretLeft',
          CaretRight: 'CaretRight',
        },
      },
    },
    className: {
      description: 'Override or extend the styles applied to the component.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    as: {
      description: 'The element used for the root node.',
      table: {
        type: { summary: 'button | a | label' },
        defaultValue: { summary: 'button' },
      },
      control: { type: 'select', options: ['button', 'a', 'label'] },
    },
    target: {
      description:
        'The target attribute specifies where to open the linked document when element is an `a` element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '_self' },
      },
      control: { type: 'text' },
    },
    href: {
      description:
        'The URL to link to when the button is clicked when element is an `a` element.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    onlyIcon: {
      description: 'If true, the padding of component will be equal.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    fluid: {
      description:
        'If true, the component will take up the full width of its container.',
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
        component: 'Button component for user interaction.',
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
  type: 'button',
  size: 'md',
  color: 'primary',
  variant: 'contained',
  suffix: null,
  prefix: null,
  className: '',
  as: 'button',
  target: '_self',
  href: '',
  onlyIcon: false,
  fluid: false,
  disabled: false,
  onClick: action('clicked'),
}

export const Gray = Template.bind({})
Gray.args = {
  children: 'Button',
  type: 'button',
  size: 'md',
  color: 'gray',
  variant: 'contained',
  suffix: null,
  prefix: null,
  className: '',
  as: 'button',
  target: '_self',
  href: '',
  onlyIcon: false,
  fluid: false,
  disabled: false,
  onClick: action('clicked'),
}

export const Info = Template.bind({})
Info.args = {
  children: 'Button',
  type: 'button',
  size: 'md',
  color: 'info',
  variant: 'contained',
  suffix: null,
  prefix: null,
  className: '',
  as: 'button',
  target: '_self',
  href: '',
  onlyIcon: false,
  fluid: false,
  disabled: false,
  onClick: action('clicked'),
}

export const Error = Template.bind({})
Error.args = {
  children: 'Button',
  type: 'button',
  size: 'md',
  color: 'error',
  variant: 'contained',
  suffix: null,
  prefix: null,
  className: '',
  as: 'button',
  target: '_self',
  href: '',
  onlyIcon: false,
  fluid: false,
  disabled: false,
  onClick: action('clicked'),
}

export const Warning = Template.bind({})
Warning.args = {
  children: 'Button',
  type: 'button',
  size: 'md',
  color: 'warning',
  variant: 'contained',
  suffix: null,
  prefix: null,
  className: '',
  as: 'button',
  target: '_self',
  href: '',
  onlyIcon: false,
  fluid: false,
  disabled: false,
  onClick: action('clicked'),
}

export const Success = Template.bind({})
Success.args = {
  children: 'Button',
  type: 'button',
  size: 'md',
  color: 'success',
  variant: 'contained',
  suffix: null,
  prefix: null,
  className: '',
  as: 'button',
  target: '_self',
  href: '',
  onlyIcon: false,
  fluid: false,
  disabled: false,
  onClick: action('clicked'),
}

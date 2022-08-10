import { ComponentMeta, ComponentStory } from '@storybook/react'
import Avatar from '@/components/Avatar'

export default {
  title: 'Design System/Components/Avatar',
  component: Avatar,
  argTypes: {
    variant: {
      description: 'The variant to use.',
      table: {
        type: {
          summary: 'circular | rounded | square',
        },
        defaultValue: { summary: 'circular' },
      },
      control: {
        type: 'select',
        options: ['circular', 'rounded', 'square'],
      },
    },
    size: {
      description: 'The size of the component.',
      table: {
        type: { summary: 'xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl' },
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      },
    },
    src: {
      description: 'The `src` attribute for the `img` element.',
      table: {
        type: { summary: 'text' },
      },
      control: {
        type: 'text',
      },
    },
    alt: {
      description: 'The `alt` attribute for the `img` element.',
      table: {
        type: { summary: 'text' },
      },
      control: {
        type: 'text',
      },
    },
    border: {
      description: 'If `true` the component will have a border.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
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
          'Avatars are found throughout material design with uses in everything from tables to dialog menus.',
      },
    },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Circular = Template.bind({})
Circular.args = {
  variant: 'circular',
  size: 'md',
  children: 'VN',
  border: false,
  className: 'bg-primary-50 text-primary-700',
}

export const Rounded = Template.bind({})
Rounded.args = {
  variant: 'rounded',
  size: 'md',
  children: 'VN',
  border: false,
  className: 'bg-primary-50 text-primary-700',
}

export const Square = Template.bind({})
Square.args = {
  variant: 'square',
  size: 'md',
  children: 'VN',
  border: false,
  className: 'bg-primary-50 text-primary-700',
}

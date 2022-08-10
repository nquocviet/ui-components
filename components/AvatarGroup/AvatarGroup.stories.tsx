import { ComponentMeta, ComponentStory } from '@storybook/react'
import Avatar from '@/components/Avatar'
import AvatarGroup from '@/components/AvatarGroup'

export default {
  title: 'Design System/Components/AvatarGroup',
  component: AvatarGroup,
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
    max: {
      description: 'Max avatars to show before `+x`.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 },
      },
      control: { type: 'number' },
    },
    spacing: {
      description: 'Spacing between avatars.',
      table: {
        type: {
          summary: 'sm | md | lg',
        },
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node[]' },
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
        component: 'Avatar group renders its children as a stack.',
      },
    },
  },
} as ComponentMeta<typeof AvatarGroup>

const Template: ComponentStory<typeof AvatarGroup> = (args) => (
  <AvatarGroup spacing='lg' {...args}>
    <Avatar className='bg-primary-50 text-primary-700'>E</Avatar>
    <Avatar className='bg-gray-50 text-gray-700'>X</Avatar>
    <Avatar className='bg-warning-50 text-warning-700'>A</Avatar>
    <Avatar className='bg-info-50 text-info-700'>M</Avatar>
    <Avatar className='bg-success-50 text-success-700'>P</Avatar>
    <Avatar className='bg-error-50 text-error-700'>L</Avatar>
    <Avatar className='bg-slate-50 text-slate-700'>E</Avatar>
  </AvatarGroup>
)

export const Circular = Template.bind({})
Circular.args = {
  variant: 'circular',
}

export const Rounded = Template.bind({})
Rounded.args = {
  variant: 'rounded',
}

export const Square = Template.bind({})
Square.args = {
  variant: 'square',
}

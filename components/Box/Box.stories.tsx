import { ComponentMeta, ComponentStory } from '@storybook/react'
import Box from '@/components/Box'

export default {
  title: 'Design System/Components/Box',
  component: Box,
  argTypes: {
    width: {
      description: 'Width of the component.',
      table: {
        type: { summary: 'number | string' },
      },
    },
    height: {
      description: 'Height of the component.',
      table: {
        type: { summary: 'number | string' },
      },
    },
    ratio: {
      description: 'Ratio of the component.',
      table: {
        type: { summary: 'number' },
      },
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
          'The Box component serves as a wrapper component for most of the CSS utility needs.',
      },
    },
  },
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = (arg) => (
  <Box className='bg-primary-600' width={150} {...arg} />
)

export const Example = Template.bind({})

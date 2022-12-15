import { ComponentMeta, ComponentStory } from '@storybook/react'
import Overlay from './Overlay'
import Box from '../Box'
import Typography from '../Typography'

export default {
  title: 'Design System/Components/Overlay',
  component: Overlay,
  argTypes: {
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
    },
    rounded: {
      description: 'The border radius of the component.',
      table: {
        type: { summary: 'none | xs | sm | md | lg | xl' },
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'select',
        options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      },
    },
    color: {
      description: 'The color of the component. It supports by default colors.',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '#000000' },
      },
      control: {
        type: 'text',
      },
    },
    opacity: {
      description: 'Set opacity to component.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0.5 },
      },
      control: { type: 'number' },
    },
    blur: {
      description: 'Set backdrop filter to component.',
      table: {
        type: { summary: 'number' },
      },
      control: { type: 'number' },
    },
    zIndex: {
      description: 'Config z-index of component.',
      table: {
        type: { summary: 'number | null' },
        defaultValue: { summary: 'null' },
      },
      control: { type: 'number' },
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
          'Overlays given element with div element with any color and opacity.',
      },
    },
  },
} as ComponentMeta<typeof Overlay>

const Template: ComponentStory<typeof Overlay> = (arg) => (
  <Box
    className='relative flex items-center justify-center'
    style={{ height: '100px' }}
  >
    <Overlay {...arg} />
    <Typography>This text has an overlay covering it</Typography>
  </Box>
)

export const Example = Template.bind({})
Example.args = {
  children: '',
  rounded: 'none',
  color: '',
  opacity: 0.5,
  zIndex: null,
  className: '',
}

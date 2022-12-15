import { ComponentMeta, ComponentStory } from '@storybook/react'
import Stack from './Stack'
import Box from '../Box'

export default {
  title: 'Design System/Components/Stack',
  component: Stack,
  argTypes: {
    direction: {
      description: 'Defines the `flex-direction` style property.',
      table: {
        type: {
          summary: 'row | row-reverse | column | column-reverse',
        },
        defaultValue: { summary: 'row' },
      },
      control: {
        type: 'select',
        options: ['row', 'row-reverse', 'column', 'column-reverse'],
      },
    },
    align: {
      description: 'Defines the `align-items` style property.',
      table: {
        type: {
          summary: 'flex-start | center | flex-end | stretch | baseline',
        },
        defaultValue: { summary: 'center' },
      },
      control: {
        type: 'select',
        options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      },
    },
    justify: {
      description: 'Defines the `justify-content` style property.',
      table: {
        type: {
          summary:
            'flex-start | center | flex-end | space-between | space-around | space-evenly',
        },
        defaultValue: { summary: 'center' },
      },
      control: {
        type: 'select',
        options: [
          'flex-start',
          'center',
          'flex-end',
          'space-between',
          'space-around',
          'space-evenly',
        ],
      },
    },
    spacing: {
      description:
        'Defines the space between the type item components. It can only be used on a type container component.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 16 },
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
          'The Stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing between each child.',
      },
    },
  },
} as ComponentMeta<typeof Stack>

const Template: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <Box style={{ width: '80px', height: '40px' }} className='bg-primary-200'>
      Item 1
    </Box>
    <Box style={{ width: '80px', height: '40px' }} className='bg-primary-200'>
      Item 2
    </Box>
    <Box style={{ width: '80px', height: '40px' }} className='bg-primary-200'>
      Item 3
    </Box>
  </Stack>
)

export const Example = Template.bind({})
Example.args = {
  direction: 'row',
  align: 'center',
  justify: 'center',
  spacing: 16,
  className: '',
}

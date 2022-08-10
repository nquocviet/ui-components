import { ComponentMeta, ComponentStory } from '@storybook/react'
import Grid from '@/components/Grid'
import Box from '@/components/Box'

export default {
  title: 'Design System/Components/Grid',
  component: Grid,
  argTypes: {
    align: {
      description: 'Defines the `align-items` style property.',
      table: {
        type: {
          summary: 'flex-start | center | flex-end | stretch | baseline',
        },
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
    row: {
      description:
        'If true, the component will have the flex `container` behavior. You should be wrapping items with a `container`.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    column: {
      description: 'If true, the component will have the flex `item` behavior.',
      table: {
        type: { summary: 'boolean' },
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
    expanded: {
      description:
        'If true, the component will have `max-width: none` style property',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 16 },
      },
    },
    xl: {
      description:
        "It sets the number of columns the grid item uses. It can't be greater than `12`. The value is applied for the `xl` breakpoint and wider screens if not overridden.",
      table: {
        type: { summary: 'number' },
      },
    },
    lg: {
      description:
        "It sets the number of columns the grid item uses. It can't be greater than `12`. The value is applied for the `lg` breakpoint and wider screens if not overridden.",
      table: {
        type: { summary: 'number' },
      },
    },
    md: {
      description:
        "It sets the number of columns the grid item uses. It can't be greater than `12`. The value is applied for the `md` breakpoint and wider screens if not overridden.",
      table: {
        type: { summary: 'number' },
      },
    },
    sm: {
      description:
        "It sets the number of columns the grid item uses. It can't be greater than `12`. The value is applied for the `sm` breakpoint and wider screens if not overridden.",
      table: {
        type: { summary: 'number' },
      },
    },
    xs: {
      description:
        "It sets the number of columns the grid item uses. It can't be greater than `12`. The value is applied for the `xs` breakpoint and wider screens if not overridden.",
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
          'The responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.',
      },
    },
  },
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = () => (
  <Grid row>
    <Grid xs={4} column>
      <Box ratio='none' height={50} className='bg-gray-100'>
        Column
      </Box>
    </Grid>
    <Grid xs={4} column>
      <Box ratio='none' height={50} className='bg-gray-100'>
        Column
      </Box>
    </Grid>
    <Grid xs={4} column>
      <Box ratio='none' height={50} className='bg-gray-100'>
        Column
      </Box>
    </Grid>
    <Grid xs={4} column>
      <Box ratio='none' height={50} className='bg-gray-100'>
        Column
      </Box>
    </Grid>
    <Grid xs={4} column>
      <Box ratio='none' height={50} className='bg-gray-100'>
        Column
      </Box>
    </Grid>
    <Grid xs={4} column>
      <Box ratio='none' height={50} className='bg-gray-100'>
        Column
      </Box>
    </Grid>
  </Grid>
)

export const Example = Template.bind({})

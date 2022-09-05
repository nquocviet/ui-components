import { ComponentMeta, ComponentStory } from '@storybook/react'
import LoadingOverlay from '@/components/LoadingOverlay'
import { Box, Button, Paper, Stack } from '..'
import { useToggle } from '@/hooks'

export default {
  title: 'Design System/Components/LoadingOverlay',
  component: LoadingOverlay,
  argTypes: {
    type: {
      description: 'The type of spinner.',
      table: {
        type: { summary: 'dash | dots' },
        defaultValue: { summary: 'dash' },
      },
      control: {
        type: 'select',
        options: ['dash', 'dots'],
      },
    },
    loader: {
      description: 'You can also replace another spinner instead.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'node' },
    },
    loaderProps: {
      description: 'Pass another props to spinner.',
      table: {
        type: { summary: 'any' },
      },
      control: { type: 'any' },
    },
    overlayColor: {
      description: 'The color of the overlay. It supports by default colors.',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '#000000' },
      },
      control: {
        type: 'text',
      },
    },
    overlayOpacity: {
      description: 'Set opacity to overlay.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0.5 },
      },
      control: { type: 'number' },
    },
    overlayBlur: {
      description: 'Set backdrop filter to overlay.',
      table: {
        type: { summary: 'number' },
      },
      control: { type: 'number' },
    },
    overlayZIndex: {
      description: 'Config z-index of overlay.',
      table: {
        type: { summary: 'number | null' },
        defaultValue: { summary: 'null' },
      },
      control: { type: 'text' },
    },
    zIndex: {
      description: 'Config z-index of component.',
      table: {
        type: { summary: 'number | null' },
        defaultValue: { summary: 'null' },
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
        component: 'Overlay over given container with centered Spinner.',
      },
    },
  },
} as ComponentMeta<typeof LoadingOverlay>

const Template: ComponentStory<typeof LoadingOverlay> = (arg) => {
  const [visible, setVisible] = useToggle(false)

  return (
    <Box className='flex items-center justify-center'>
      <Stack direction='column'>
        <Box className='relative'>
          <Paper
            className='relative flex items-center justify-center'
            style={{ width: '300px', height: '300px' }}
            hasBorder
          >
            Content inside
          </Paper>
          <LoadingOverlay visible={visible} {...arg} />
        </Box>
        <Button onClick={setVisible}>Toggle overlay</Button>
      </Stack>
    </Box>
  )
}

export const Example = Template.bind({})
Example.args = {
  type: 'dash',
  loader: '',
  loaderProps: '',
  overlayOpacity: null,
  overlayBlur: '2px',
  overlayColor: '#ffffff',
  overlayZIndex: null,
  zIndex: null,
  className: '',
}

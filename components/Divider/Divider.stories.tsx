import { ComponentMeta, ComponentStory } from '@storybook/react'
import Divider from './Divider'
import Typography from '../Typography'

export default {
  title: 'Design System/Components/Divider',
  component: Divider,
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
          summary: 'single | dual | filled',
        },
        defaultValue: { summary: 'single' },
      },
      control: {
        type: 'select',
        options: ['single', 'dual', 'filled'],
      },
    },
    align: {
      description: 'Set the text-align on the component.',
      table: {
        type: {
          summary: 'center | left | right',
        },
        defaultValue: { summary: 'center' },
      },
      control: {
        type: 'select',
        options: ['center', 'left', 'right'],
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
          'A divider is a thin line that groups content in lists and layouts.',
      },
    },
  },
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />

export const Single = Template.bind({})
Single.args = {
  children: (
    <Typography fontSize='text-lg' weight='medium'>
      Notifications
    </Typography>
  ),
  type: 'single',
  align: 'center',
  className: '',
}

export const Dual = Template.bind({})
Dual.args = {
  children: (
    <Typography fontSize='text-lg' weight='medium'>
      Notifications
    </Typography>
  ),
  type: 'dual',
  align: 'center',
  className: '',
}

export const Filled = Template.bind({})
Filled.args = {
  children: (
    <Typography fontSize='text-lg' weight='medium'>
      Notifications
    </Typography>
  ),
  type: 'filled',
  align: 'center',
  className: '',
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import Tooltip from './Tooltip'
import Button from '../Button'
import { Warning } from 'phosphor-react'

export default {
  title: 'Design System/Components/Tooltip',
  component: Tooltip,
  argTypes: {
    theme: {
      description: 'The theme of the component. It supports by default colors.',
      table: {
        type: { summary: 'light | dark' },
        defaultValue: { summary: 'dark' },
      },
      control: { type: 'select', options: ['light', 'dark'] },
    },
    title: {
      description: 'The title of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
    },
    description: {
      description: 'The description of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
    },
    autoAdjustOverflow: {
      description:
        'Whether to adjust tooltip placement automatically when tooltip is off screen.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: { type: 'boolean' },
    },
    placement: {
      description: 'The position of the component relative to the target.',
      table: {
        type: {
          summary:
            "{ horizontal: 'center' | 'left' | 'right', vertical: 'bottom' | 'top' }",
        },
        defaultValue: { summary: "{ horizontal: 'center', vertical: 'top' }" },
      },
      control: { type: 'object' },
    },
    mouseEnterDelay: {
      description:
        'The number of milliseconds to wait before showing the tooltip.',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: 300 },
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
          'Tooltips display informative text when users hover over an element.',
      },
    },
  },
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div className='flex justify-center items-center h-60'>
    <Tooltip {...args}>
      <Button color='warning' size='sm' rounded onlyIcon>
        <Warning size={20} />
      </Button>
    </Tooltip>
  </div>
)

export const Dark = Template.bind({})
Dark.args = {
  theme: 'dark',
  content: 'Tooltip message',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  autoAdjustOverflow: true,
  placement: {
    vertical: 'top',
    horizontal: 'center',
  },
  mouseEnterDelay: 300,
  zIndex: null,
  className: '',
}

export const Light = Template.bind({})
Light.args = {
  theme: 'light',
  content: 'Tooltip message',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  autoAdjustOverflow: true,
  placement: {
    vertical: 'top',
    horizontal: 'center',
  },
  mouseEnterDelay: 300,
  zIndex: null,
  className: '',
}

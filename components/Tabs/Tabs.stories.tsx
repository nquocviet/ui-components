import { ComponentMeta, ComponentStory } from '@storybook/react'
import Tabs from './Tabs'
import { action } from '@storybook/addon-actions'

const { TabPanel } = Tabs

export default {
  title: 'Design System/Components/Tabs',
  component: Tabs,
  argTypes: {
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
    },
    defaultActiveTab: {
      description: 'Initial active tab based on key prop of `TabPanel`.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    type: {
      description: 'The type of the component.',
      table: {
        type: { summary: 'primary | gray | white | underline | filled' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'select',
        options: ['primary', 'gray', 'white', 'underline', 'filled'],
      },
    },
    size: {
      description: 'The size of the component.',
      table: {
        type: { summary: 'sm | md' },
        defaultValue: { summary: 'sm' },
      },
      control: {
        type: 'select',
        options: ['sm', 'md'],
      },
    },
    direction: {
      description: 'Defines the direction of component.',
      table: {
        type: {
          summary: 'vertical | horizontal',
        },
        defaultValue: { summary: 'horizontal' },
      },
      control: {
        type: 'select',
        options: ['vertical', 'horizontal'],
      },
    },
    destroyInactiveTab: {
      description:
        'If true, inactive `TabPanel` will be destroyed when change tab.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    fluid: {
      description: 'If true, the label component will get full width.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    spacing: {
      description: 'Defines the space between the label components.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 16 },
      },
    },
    className: {
      description: 'Override or extend the styles applied to the component.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    labelClassName: {
      description:
        'Override or extend the styles applied to the label component.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    labelMinWidth: {
      description: 'Specifies the minimum width of label component.',
      table: {
        type: { summary: 'number' },
      },
      control: { type: 'number' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Tabs make it easy to explore and switch between different views.',
      },
    },
  },
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <TabPanel key='1' label='My profile'>
      Tab content 1
    </TabPanel>
    <TabPanel key='2' label='Profile' count={2}>
      Tab content 2
    </TabPanel>
    <TabPanel key='3' label='Team' disabled>
      Tab content 3
    </TabPanel>
    <TabPanel key='4' label='Plan'>
      Tab content 4
    </TabPanel>
  </Tabs>
)

export const Primary = Template.bind({})
Primary.args = {
  defaultActiveTab: '',
  type: 'primary',
  size: 'sm',
  direction: 'horizontal',
  spacing: 8,
  destroyInactiveTab: false,
  fluid: false,
  className: '',
  labelClassName: '',
  labelMinWidth: undefined,
  onChange: action('changed tab'),
}

export const Gray = Template.bind({})
Gray.args = {
  defaultActiveTab: '',
  type: 'gray',
  size: 'sm',
  direction: 'horizontal',
  spacing: 8,
  destroyInactiveTab: false,
  fluid: false,
  className: '',
  labelClassName: '',
  labelMinWidth: undefined,
  onChange: action('changed tab'),
}

export const White = Template.bind({})
White.args = {
  defaultActiveTab: '',
  type: 'white',
  size: 'sm',
  direction: 'horizontal',
  spacing: 8,
  destroyInactiveTab: false,
  fluid: false,
  className: '',
  labelClassName: '',
  labelMinWidth: undefined,
  onChange: action('changed tab'),
}

export const Underline = Template.bind({})
Underline.args = {
  defaultActiveTab: '',
  type: 'underline',
  size: 'sm',
  direction: 'horizontal',
  spacing: 8,
  destroyInactiveTab: false,
  fluid: false,
  className: '',
  labelClassName: '',
  labelMinWidth: undefined,
  onChange: action('changed tab'),
}

export const Filled = Template.bind({})
Filled.args = {
  defaultActiveTab: '',
  type: 'filled',
  size: 'sm',
  direction: 'horizontal',
  spacing: 8,
  destroyInactiveTab: false,
  fluid: false,
  className: '',
  labelClassName: '',
  labelMinWidth: undefined,
  onChange: action('changed tab'),
}

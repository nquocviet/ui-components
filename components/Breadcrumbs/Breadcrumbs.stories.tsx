import { ComponentMeta, ComponentStory } from '@storybook/react'
import Breadcrumbs from '@/components/Breadcrumbs'
import Typography from '../Typography'
import { House } from 'phosphor-react'

export default {
  title: 'Design System/Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    type: {
      description: 'The type of the component.',
      table: {
        type: {
          summary: 'text | line',
        },
        defaultValue: { summary: 'text' },
      },
      control: {
        type: 'select',
        options: ['text', 'line'],
      },
    },
    separator: {
      description: 'Custom separator node.',
      table: {
        type: { summary: 'chevron | slash | node | string' },
        defaultValue: { summary: 'chevron' },
      },
      control: { type: 'text' },
    },
    maxItems: {
      description:
        'Specifies the maximum number of breadcrumbs to display. When there are more than the maximum number, only the first itemsBeforeCollapse and last itemsAfterCollapse will be shown, with an ellipsis in between.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 },
      },
      control: { type: 'number' },
    },
    itemsAfterCollapse: {
      description:
        'Specifies the maximum number of breadcrumbs to display. When there are more than the maximum number, only the first itemsBeforeCollapse and last itemsAfterCollapse will be shown, with an ellipsis in between.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      control: { type: 'number' },
    },
    itemsBeforeCollapse: {
      description:
        'Specifies the maximum number of breadcrumbs to display. When there are more than the maximum number, only the first itemsBeforeCollapse and last itemsAfterCollapse will be shown, with an ellipsis in between.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      control: { type: 'number' },
    },
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
    },
    className: {
      description:
        'Override or extend the styles applied to the container of component.',
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
          'Breadcrumbs consist of a list of links that help a user visualize a page\'s location within the hierarchical structure of a website, and allow navigation up to any of its "ancestors".',
      },
    },
  },
} as ComponentMeta<typeof Breadcrumbs>

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args}>
    <a href='/'>
      <House size={20} />
    </a>
    <a href='/#'>Catalog</a>
    <a href='/#'>Clothes</a>
    <a href='/#'>New Collection</a>
    <Typography fontSize='text-sm'>Shirts</Typography>
  </Breadcrumbs>
)

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  separator: 'chevron',
  maxItems: 3,
  itemsAfterCollapse: 1,
  itemsBeforeCollapse: 2,
  className: '',
}

export const Line = Template.bind({})
Line.args = {
  type: 'line',
  separator: 'chevron',
  maxItems: 3,
  itemsAfterCollapse: 1,
  itemsBeforeCollapse: 2,
  className: '',
}

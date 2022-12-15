import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Pagination from './Pagination'

export default {
  title: 'Design System/Components/Pagination',
  component: Pagination,
  argTypes: {
    variant: {
      description: 'The variant to use.',
      table: {
        type: { summary: 'page | card | group | group-left | group-right' },
        defaultValue: { summary: 'page' },
      },
      control: {
        type: 'select',
        options: ['page', 'card', 'group', 'group-left', 'group-right'],
      },
    },
    shape: {
      description: 'The shape of the pagination items.',
      table: {
        type: { summary: 'circular | rounded' },
        defaultValue: { summary: 'circular' },
      },
      control: {
        type: 'select',
        options: ['circular', 'rounded'],
      },
    },
    currentPage: {
      description: 'The page selected by default.',
      table: {
        type: { summary: 'number' },
      },
      control: { type: 'number' },
    },
    totalPages: {
      description: 'The total number of pages.',
      table: {
        type: { summary: 'number' },
      },
      control: { type: 'number' },
    },
    offset: {
      description:
        'Number of always visible pages before and after the current page.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 2 },
      },
      control: { type: 'number' },
    },
    border: {
      description: 'If true, the component will have a border top.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: { type: 'boolean' },
    },
    disabled: {
      description: 'If true, the component is disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: { type: 'boolean' },
    },
    responsive: {
      description: 'If true, the component will reponsive automatically.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: { type: 'boolean' },
    },
    hideNextButton: {
      description: 'If true, hide the next-page button.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: { type: 'boolean' },
    },
    hidePrevButton: {
      description: 'If true, hide the previous-page button.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: { type: 'boolean' },
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
          'The Pagination component enables the user to select a specific page from a range of pages.',
      },
    },
  },
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
)

export const Page = Template.bind({})
Page.args = {
  variant: 'page',
  shape: 'circular',
  currentPage: 1,
  totalPages: 10,
  offset: 2,
  withBorder: true,
  disabled: false,
  responsive: true,
  hideNextButton: false,
  hidePrevButton: false,
  className: '',
  onChange: () => action('changed page'),
}

export const Card = Template.bind({})
Card.args = {
  variant: 'card',
  shape: 'circular',
  currentPage: 1,
  totalPages: 10,
  offset: 2,
  withBorder: true,
  disabled: false,
  responsive: true,
  hideNextButton: false,
  hidePrevButton: false,
  className: '',
  onChange: () => action('changed page'),
}

export const Group = Template.bind({})
Group.args = {
  variant: 'group',
  shape: 'circular',
  currentPage: 1,
  totalPages: 10,
  offset: 2,
  withBorder: true,
  disabled: false,
  responsive: true,
  hideNextButton: false,
  hidePrevButton: false,
  className: '',
  onChange: () => action('changed page'),
}

export const GroupLeft = Template.bind({})
GroupLeft.args = {
  variant: 'group-left',
  shape: 'circular',
  currentPage: 1,
  totalPages: 10,
  offset: 2,
  withBorder: true,
  disabled: false,
  responsive: true,
  hideNextButton: false,
  hidePrevButton: false,
  className: '',
  onChange: () => action('changed page'),
}

export const GroupRight = Template.bind({})
GroupRight.args = {
  variant: 'group-right',
  shape: 'circular',
  currentPage: 1,
  totalPages: 10,
  offset: 2,
  withBorder: true,
  disabled: false,
  responsive: true,
  hideNextButton: false,
  hidePrevButton: false,
  className: '',
  onChange: () => action('changed page'),
}

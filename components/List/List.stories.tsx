import { ComponentMeta, ComponentStory } from '@storybook/react'
import List from './List'

export default {
  title: 'Design System/Components/List',
  component: List,
  argTypes: {
    icon: {
      description:
        'If false, the component will not have the icon. In addition, you can also replace another icon instead.',
      table: {
        type: { summary: 'boolean | node' },
        defaultValue: { summary: 'true' },
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
          "An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.",
      },
    },
  },
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    <List.Item>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </List.Item>
    <List.Item>
      Corporis qui mollitia nemo magnam commodi facilis pariatur ipsa
      repudiandae
    </List.Item>
    <List.Item>Illo similique veritatis, nisi provident</List.Item>
    <List.Item>
      Accusamus vel qui ex eveniet nulla ducimus similique tenetur earum quasi.
    </List.Item>
  </List>
)

export const UnOrdered = Template.bind({})
UnOrdered.args = {
  type: 'unordered',
  withPadding: true,
  className: '',
}

export const Ordered = Template.bind({})
Ordered.args = {
  type: 'ordered',
  withPadding: true,
  className: '',
}

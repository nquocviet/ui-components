import { ComponentMeta, ComponentStory } from '@storybook/react'
import Paper from './Paper'

export default {
  title: 'Design System/Components/Paper',
  component: Paper,
  argTypes: {
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
    },
    shadow: {
      description: 'The shadow of the component.',
      table: {
        type: { summary: 'xs | sm | md | lg | xl' },
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
    },
    rounded: {
      description: 'The border radius of the component.',
      table: {
        type: { summary: 'none | xs | sm | md | lg | xl | 2xl | 3xl | full' },
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'select',
        options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
      },
    },
    padding: {
      description: 'The padding of the component.',
      table: {
        type: { summary: 'xs | sm | md | lg | xl' },
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
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
          'The Paper component renders white background with shadow, border-radius and padding.',
      },
    },
  },
} as ComponentMeta<typeof Paper>

const Template: ComponentStory<typeof Paper> = (arg) => <Paper {...arg} />

export const Example = Template.bind({})
Example.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptas veritatis quas labore. Quod velit voluptates, quam nesciunt nobis magnam iure commodi officiis facilis, aliquid id repudiandae natus debitis ex, quia nam ratione molestiae recusandae aliquam? Quis obcaecati, a quos, totam incidunt pariatur tempora nesciunt quasi animi, eius unde reprehenderit.',
  shadow: 'md',
  rounded: 'md',
  padding: 'md',
  withBorder: false,
}

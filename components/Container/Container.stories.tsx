import { ComponentMeta, ComponentStory } from '@storybook/react'
import Container from '@/components/Container'

export default {
  title: 'Design System/Components/Container',
  component: Container,
  argTypes: {
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
          "The container centers your content horizontally. It's the most basic layout element.",
      },
    },
  },
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = () => (
  <Container>
    <div className='bg-primary-200 h-20'></div>
  </Container>
)

export const Example = Template.bind({})

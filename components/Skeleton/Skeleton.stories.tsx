import { ComponentMeta, ComponentStory } from '@storybook/react'
import Skeleton from './Skeleton'

export default {
  title: 'Design System/Components/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: {
      description: 'The variant to use.',
      table: {
        type: {
          summary: 'text | circular | rectangular | rounded',
        },
        defaultValue: { summary: 'rectangular' },
      },
      control: {
        type: 'select',
        options: ['text', 'circular', 'rectangular', 'rounded'],
      },
    },
    width: {
      description:
        'Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own.',
      table: {
        type: { summary: 'number | string' },
      },
    },
    height: {
      description:
        "Height of the skeleton. Useful when you don't want to adapt the skeleton to a text element but for instance a card.",
      table: {
        type: { summary: 'number | string' },
      },
    },
    animation: {
      description: 'If `false` the animation effect is disabled.',
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
          'Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.',
      },
    },
  },
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = () => (
  <div style={{ width: '250px' }}>
    <Skeleton variant='rectangular' height={100} />
    <div className='flex items-start gap-2 pt-2'>
      <Skeleton variant='circular' width={45} height={45} />
      <div className='grow'>
        <Skeleton variant='text' />
        <Skeleton variant='text' width='60%' />
      </div>
    </div>
  </div>
)

export const Example = Template.bind({})

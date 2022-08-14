import { ComponentMeta, ComponentStory } from '@storybook/react'
import Progress from '@/components/Progress'

export default {
  title: 'Design System/Components/Progress',
  component: Progress,
  argTypes: {
    value: {
      description:
        'The value of the progress indicator for the determinate and buffer variants. Value between 0 and 100.',
      table: {
        type: { summary: 'any' },
        defaultValue: { summary: 0 },
      },
      control: { type: 'number' },
    },
    label: {
      description: 'A text to be used in describe the label of component.',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    labelPlacement: {
      description: 'The position of the label relative to the component.',
      table: {
        type: {
          summary: 'none | right | bottom | top-floating | bottom-floating',
        },
        defaultValue: { summary: 'none' },
      },
      control: {
        type: 'select',
        options: ['none', 'right', 'bottom', 'top-floating', 'bottom-floating'],
      },
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
          'Progress indicators commonly known as express an unspecified wait time or display the length of a process.',
      },
    },
  },
} as ComponentMeta<typeof Progress>

const Template: ComponentStory<typeof Progress> = (args) => (
  <div className='w-1/3'>
    <Progress {...args} />
  </div>
)

export const LabelNone = Template.bind({})
LabelNone.args = {
  value: 50,
  label: '50%',
  labelPlacement: 'none',
  className: '',
}

export const LabelRight = Template.bind({})
LabelRight.args = {
  value: 50,
  label: '50%',
  labelPlacement: 'right',
  className: '',
}

export const LabelBottom = Template.bind({})
LabelBottom.args = {
  value: 50,
  label: '50%',
  labelPlacement: 'bottom',
  className: '',
}

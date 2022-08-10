import { ComponentMeta, ComponentStory } from '@storybook/react'
import Typography from '@/components/Typography'

export default {
  title: 'Design System/Components/Typography',
  component: Typography,
  argTypes: {
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
    },
    variant: {
      description: 'The variant to use.',
      table: {
        type: {
          summary: 'h1 | h2 | h3 | h4 | h5 | h6 | p | span | div',
        },
        defaultValue: { summary: 'p' },
      },
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
      },
    },
    align: {
      description: 'Set the text-align on the component.',
      table: {
        type: {
          summary: 'center | left | right | justify',
        },
        defaultValue: { summary: 'left' },
      },
      control: {
        type: 'select',
        options: ['center', 'left', 'right', 'justify'],
      },
    },
    fontSize: {
      description: 'Applies the typography font-sizes.',
      table: {
        type: {
          summary:
            'text-2xs | text-xs | text-sm | text-md | text-lg | text-xl | display-xs | display-sm | display-md | display-lg | display-xl | display-2xl',
        },
        defaultValue: { summary: 'text-md' },
      },
      control: {
        type: 'select',
        options: [
          'text-2xs',
          'text-xs',
          'text-sm',
          'text-md',
          'text-lg',
          'text-xl',
          'display-xs',
          'display-sm',
          'display-md',
          'display-lg',
          'display-xl',
          'display-2xl',
        ],
      },
    },
    gutter: {
      description: 'If true, the text will have a bottom margin.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    noWrap: {
      description:
        'If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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
          'Use typography to present your design and content as clearly and efficiently as possible.',
      },
    },
  },
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
)

export const Typo = Template.bind({})
Typo.args = {
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis, ut quidem est explicabo eveniet molestiae ab, accusamus, illo incidunt tempora ullam necessitatibus corrupti. Velit?',
  variant: 'p',
  align: 'left',
  fontSize: 'text-md',
  gutter: false,
  noWrap: false,
  className: '',
}

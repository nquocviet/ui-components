import { ComponentMeta, ComponentStory } from '@storybook/react'
import AspectRatio from '@/components/AspectRatio'
import Box from '../Box'

export default {
  title: 'Design System/Components/AspectRatio',
  component: AspectRatio,
  argTypes: {
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'text' },
    },
    ratio: {
      description: 'The ratio of the component.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 / 1 },
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
          'AspectRatio allows to maintain consistent width/height ratio. It can be used to display images, maps, videos and other media.',
      },
    },
  },
} as ComponentMeta<typeof AspectRatio>

const Template: ComponentStory<typeof AspectRatio> = (arg) => (
  <AspectRatio ratio={16 / 9} className='w-1/2' {...arg}>
    <Box className='bg-primary-200'>
      &#60;AspectRatio ratio=&#123;16 / 9&#125; /&#62;
    </Box>
  </AspectRatio>
)

export const Example = Template.bind({})

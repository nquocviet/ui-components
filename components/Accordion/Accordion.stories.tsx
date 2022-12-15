import { ComponentMeta, ComponentStory } from '@storybook/react'
import Accordion from './Accordion'
import { action } from '@storybook/addon-actions'
import { Box } from '..'

export default {
  title: 'Design System/Components/Accordion',
  component: Accordion,
  argTypes: {
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'node' },
    },
    value: {
      description: 'Value for controlled component',
      table: {
        type: { summary: 'string | string[]' },
      },
      control: { type: 'text' },
    },
    defaultValue: {
      description: 'Default value for uncontrolled component',
      table: {
        type: { summary: 'string | string[]' },
      },
      control: { type: 'text' },
    },
    multiple: {
      description: 'Determines whether multiple items can be opened at a time',
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
          'The accordion component allows the user to show and hide sections of related content on a page.',
      },
    },
  },
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Box className='w-1/2'>
    <Accordion {...args}>
      <Accordion.Item value='panel1'>
        <Accordion.Control>
          Sint in similique vitae facere labore magni ab sequi quia.
        </Accordion.Control>
        <Accordion.Panel>
          Ut esse iure quasi vitae modi suscipit. Molestiae nulla eligendi sit
          repellendus nesciunt quaerat. Laudantium dolorum fuga molestiae
          veritatis nesciunt laudantium aliquid eos enim. Iste commodi dolores
          magni minus iste minima distinctio.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value='panel2'>
        <Accordion.Control>
          Molestiae unde consectetur rerum. A eaque tempore deleniti.
        </Accordion.Control>
        <Accordion.Panel>
          Neque tenetur assumenda voluptate. Recusandae facere provident nostrum
          beatae laborum debitis delectus cupiditate voluptatibus. Dolores
          deleniti cumque aut odio. Ea illum sunt corrupti reiciendis libero
          minima reprehenderit. Quis natus non cum necessitatibus. Reiciendis
          voluptas mollitia.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value='panel3'>
        <Accordion.Control>
          Incidunt vel totam animi nobis laudantium animi eveniet et quis.
        </Accordion.Control>
        <Accordion.Panel>
          Sapiente ipsa animi perspiciatis. Recusandae soluta dolores atque
          quasi dolorum repudiandae. Temporibus dolorem voluptas rerum molestiae
          atque nemo alias. Voluptates praesentium officiis maxime quaerat
          beatae praesentium dolorem ipsum officia. Vel veniam harum minima
          illum ipsam in cum nam.
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  </Box>
)

export const Example = Template.bind({})
Example.args = {
  className: '',
  multiple: false,
  onChange: action('changed tab'),
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import Dropdown from './Dropdown'
import { Avatar, Stack, Typography } from '..'
import {
  CaretRight,
  GearSix,
  Question,
  SignOut,
  UserRectangle,
  UserSwitch,
} from 'phosphor-react'

export default {
  title: 'Design System/Components/Dropdown',
  component: Dropdown,
  argTypes: {
    children: {
      description: 'The content of the trigger component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'node' },
    },
    overlay: {
      description: 'Menu overlay content.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'node' },
    },
    opened: {
      description: 'Controlled menu opened state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    placement: {
      description: 'The position of the component relative to target.',
      table: {
        type: {
          summary:
            "{ horizontal: 'center' | 'left' | 'right', vertical: 'bottom' | 'top' }",
        },
        defaultValue: { summary: "{ horizontal: 'right', vertical: 'top' }" },
      },
      control: { type: 'object' },
    },
    openOnScroll: {
      description: 'If true, the menu remains open when the user scrolls.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    activeOnOpen: {
      description: 'If true, the trigger component will highlight when open.',
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
          'Combine a list of secondary actions into single interactive area.',
      },
    },
  },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown
    {...args}
    overlay={
      <Dropdown.Menu>
        <Dropdown.MenuHeader>
          <Stack align='center' wrap='nowrap'>
            <Avatar className='bg-primary-50 text-primary-700'>VN</Avatar>
            <Stack direction='column' spacing={0}>
              <Typography weight='semibold'>username</Typography>
              <Typography>example.email@gmail.com</Typography>
            </Stack>
          </Stack>
        </Dropdown.MenuHeader>
        <Dropdown.MenuDivider />
        <Dropdown.MenuItem leading={<UserRectangle size={20} />}>
          Your profile
        </Dropdown.MenuItem>
        <Dropdown.MenuItem
          leading={<UserSwitch size={20} />}
          trailing={<CaretRight size={20} />}
        >
          Switch account
        </Dropdown.MenuItem>
        <Dropdown.MenuItem leading={<GearSix size={20} />}>
          Settings
        </Dropdown.MenuItem>
        <Dropdown.MenuItem leading={<Question size={20} />}>
          Help
        </Dropdown.MenuItem>
        <Dropdown.MenuItem leading={<SignOut size={20} />}>
          Sign out
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    }
  >
    <Avatar className='bg-primary-50 text-primary-700'>VN</Avatar>
  </Dropdown>
)

export const Example = Template.bind({})
Example.args = {
  placement: {
    horizontal: 'left',
    vertical: 'bottom',
  },
  openOnScroll: false,
  activeOnOpen: false,
  className: '',
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import Drawer from './Drawer'
import { Button, Divider, List, Stack } from '..'
import {
  BookmarkSimple,
  ChatDots,
  ClockCounterClockwise,
  Flag,
  GearSix,
  GlobeHemisphereWest,
  House,
  Newspaper,
  Notebook,
  Question,
  SignOut,
} from 'phosphor-react'
import { useToggle } from '@/hooks'

export default {
  title: 'Design System/Components/Drawer',
  component: Drawer,
  argTypes: {
    children: {
      description: 'The content of the trigger component.',
      table: {
        type: { summary: 'node' },
      },
      control: { type: 'node' },
    },
    width: {
      description: 'Set width to the component.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 300 },
      },
      control: { type: 'number' },
    },
    open: {
      description: 'Controlled menu opened state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    disableScrollLock: {
      description: 'Disables scroll lock.',
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
          'Navigation drawers provide access to destinations in your app. Side sheets are surfaces containing supplementary content that are anchored to the left edge of the screen.',
      },
    },
  },
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = (args) => {
  const [open, setOpen] = useToggle(false)

  return (
    <>
      <Button onClick={setOpen}>Open drawer</Button>
      <Drawer {...args} open={open} toggle={setOpen} className='p-4'>
        <List type='none'>
          <List.Item className='cursor-pointer'>
            <Stack
              align='center'
              spacing={20}
              className='px-3 py-2 rounded-md transition-colors hover:bg-gray-100 mb-2'
            >
              <House size={24} />
              Home
            </Stack>
          </List.Item>
          <List.Item className='cursor-pointer'>
            <Stack
              align='center'
              spacing={20}
              className='px-3 py-2 rounded-md transition-colors hover:bg-gray-100 mb-2'
            >
              <GlobeHemisphereWest size={24} />
              Explore
            </Stack>
          </List.Item>
          <List.Item className='cursor-pointer'>
            <Stack
              align='center'
              spacing={20}
              className='px-3 py-2 rounded-md transition-colors hover:bg-gray-100 mb-2'
            >
              <Newspaper size={24} />
              News
            </Stack>
          </List.Item>
          <List.Item className='cursor-pointer'>
            <Stack
              align='center'
              spacing={20}
              className='px-3 py-2 rounded-md transition-colors hover:bg-gray-100 mb-2'
            >
              <BookmarkSimple size={24} />
              Bookmarks
            </Stack>
          </List.Item>
          <List.Item className='cursor-pointer'>
            <Stack
              align='center'
              spacing={20}
              className='px-3 py-2 rounded-md transition-colors hover:bg-gray-100 mb-2'
            >
              <ClockCounterClockwise size={24} />
              History
            </Stack>
          </List.Item>
        </List>
        <Divider />
        <List type='none'>
          <List.Item className='cursor-pointer'>
            <Stack
              align='center'
              spacing={20}
              className='px-3 py-2 rounded-md transition-colors hover:bg-gray-100 mb-2'
            >
              <Notebook size={24} />
              Guideline
            </Stack>
          </List.Item>
          <List.Item className='cursor-pointer'>
            <Stack
              align='center'
              spacing={20}
              className='px-3 py-2 rounded-md transition-colors hover:bg-gray-100 mb-2'
            >
              <GearSix size={24} />
              Settings
            </Stack>
          </List.Item>
        </List>
        <Divider />
        <List type='none'>
          <List.Item className='cursor-pointer'>
            <Stack
              align='center'
              spacing={20}
              className='px-3 py-2 rounded-md transition-colors hover:bg-gray-100 mb-2'
            >
              <Question size={24} />
              Help
            </Stack>
          </List.Item>
          <List.Item className='cursor-pointer'>
            <Stack
              align='center'
              spacing={20}
              className='px-3 py-2 rounded-md transition-colors hover:bg-gray-100 mb-2'
            >
              <Flag size={24} />
              Report history
            </Stack>
          </List.Item>
          <List.Item className='cursor-pointer'>
            <Stack
              align='center'
              spacing={20}
              className='px-3 py-2 rounded-md transition-colors hover:bg-gray-100 mb-2'
            >
              <ChatDots size={24} />
              Send feedback
            </Stack>
          </List.Item>
          <List.Item className='cursor-pointer'>
            <Stack
              align='center'
              spacing={20}
              className='px-3 py-2 rounded-md transition-colors hover:bg-gray-100 mb-2'
            >
              <SignOut size={24} />
              Sign out
            </Stack>
          </List.Item>
        </List>
      </Drawer>
    </>
  )
}

export const Example = Template.bind({})
Example.args = {
  disableScrollLock: true,
  width: 300,
  className: '',
}

import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'

import Sidebar from './Sidebar'

import Button from '../Button/Button'
import Segment from '../Segment/Segment'

type Story = StoryObj<typeof Sidebar>

export default {
  title: 'Sidebar',
  component: Sidebar,
  render: (args) => ({
    components: { Sidebar, Button },
    setup: () => {
      const visible = ref(true)
      return { args, visible }
    },
    template: `
      <Sidebar v-model:visible="visible" v-bind="args" />
      <Button icon="plus" floated="right" @click="visible = !visible" />
    `
  }),
} as Meta<typeof Sidebar>

export const Default: Story = {
  args: {
    direction: 'left'
  }
}

export const Pusher: Story = {
  render: (args) => ({
    components: { Sidebar, Button, Segment },
    setup: () => {
      const visible = ref(false)

      const items = ref([
        { icon: 'gamepad', text: 'Games' },
        { icon: 'video camera', text: 'Channels' },
        { icon: 'video play', text: 'Videos' },
      ])
      return { args, visible, items }
    },
    template: `
      <div class="ui top attached demo menu">
        <a class="item" @click="visible = !visible">
          <i class="sidebar icon"></i>
          Menu
        </a>
      </div>
      <Segment attached="bottom">
        <Sidebar
          v-model:visible="visible"
          :items="items"
          icon="labeled"
          :mountOnBody="false"
          v-bind="args"
        />
        <div class="pusher">
          <Segment basic>
            <h3 class="ui header">Application Content</h3>
            <img src="./wireframe/short-paragraph.png" />
            <img src="./wireframe/short-paragraph.png" />
            <img src="./wireframe/short-paragraph.png" />
            <img src="./wireframe/short-paragraph.png" />
          </Segment>
        </div>
      </Segment>
    `
  }),
  args: {
    animation: 'push',
    direction: 'left',
    dimmed: false,
  }
}

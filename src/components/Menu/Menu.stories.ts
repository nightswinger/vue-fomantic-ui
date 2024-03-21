import { h, ref } from "vue"
import type { Meta, StoryObj } from "@storybook/vue3"

import Menu from "./Menu"
import MenuItem from "./MenuItem"

import Input from "../Input/Input"
import Label from "../Label/Label"

type Story = StoryObj<typeof Menu>

const meta: Meta<typeof Menu> = {
  title: "Menu",
  component: Menu,
}

export const Default: Story = {
  render: (args) => ({
    components: { Menu },
    setup: () => {
      const items = ref(["Editorials", "Reviews", "Upcoming Events"])

      return { items }
    },
    template: `
      <Menu :widths="items.length" :items="items" />
    `,
  }),
}

export const SecondaryMenu: Story = {
  render: (args) => ({
    components: { Menu, MenuItem, Input },
    setup: () => {
      const items = ref(['Home', 'Messages', 'Friends'])

      return { items, args }
    },
    template: `
      <Menu :items="items" v-bind="args">
        <template #right>
          <MenuItem>
            <Input icon="search" placeholder="Search..." />
          </MenuItem>
          <MenuItem>Logout</MenuItem>
        </template>
      </Menu>
    `,
  }),
  args: {
    secondary: true,
  }
}

export const Text: Story = {
  render: (args) => ({
    components: { Menu },
    setup: () => {
      const items = ref([
        { text: "SORT BY", header: true },
        { text: "Closest" },
        { text: "Most Comments" },
        { text: "Most Popular" },
      ])

      return { items, args }
    },
    template: `
      <Menu :items="items" v-bind="args" />
    `,
  }),
  args: {
    text: true,
  }
}

export const VerticalMenu: Story = {
  render: (args) => ({
    components: { Menu },
    setup: () => {
      const items = ref([
        { text: ['Inbox', h(Label, { color: 'teal' , pointing: 'left' }, () => 1)], color: 'teal' },
        { text: ['Spam', h(Label, {}, () => 51)] },
        { text: ['Updates', h(Label, {}, () => 1)] },
        { text: [h(Input, { icon: 'search', placeholder: 'Search mail...', transparent: true })] },
      ])

      return { items, args }
    },
    template: `
      <Menu :items="items" v-bind="args" />
    `,
  }),
  args: {
    vertical: true,
  }
}

export default meta

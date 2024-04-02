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
  render: () => ({
    components: { Menu },
    setup: () => {
      const items = ref(["Editorials", "Reviews", "Upcoming Events"])
      const active = ref(0)

      return { items, active }
    },
    template: `
      <Menu
        :widths="items.length"
        :items="items"
        v-model:activeIndex="active"
        @selected="(v) => console.log(v)"
      />
    `,
  }),
}

export const SecondaryMenu: Story = {
  render: (args) => ({
    components: { Menu, MenuItem, Input },
    setup: () => {
      const items = ref(['Home', 'Messages', 'Friends'])
      const active = ref(0)

      return { items, active, args }
    },
    template: `
      <Menu
        :items="items"
        v-model:activeIndex="active"
        @selected="() => console.log(active)"
        v-bind="args"
      >
        <template #right>
          <MenuItem as="div">
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
        { text: [h(Input, { icon: 'search', placeholder: 'Search mail...', transparent: true })], as: 'div' },
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

export const Disabled: Story = {
  render: (args) => ({
    components: { Menu },
    setup: () => {
      const items = ref([
        { text: 'Link', disabled: true },
      ])
      return { args, items }
    },
    template: `
      <Menu :items="items" v-bind="args" />
    `,
  }),
  args: {
    compact: true,
  }
}

export const Icons: Story = {
  render: (args) => ({
    components: { Menu },
    setup: () => {
      const items = ref([
        { icon: 'gamepad' },
        { icon: 'video camera' },
        { icon: 'video play' },
      ])

      return { items, args }
    },
    template: `
      <Menu :items="items" v-bind="args" />
    `,
  }),
  args: {
    icon: true,
    vertical: false,
  }
}

export const LabeledIcon: Story = {
  render: (args) => ({
    components: { Menu },
    setup: () => {
      const items = ref([
        { icon: 'gamepad', text: 'Games' },
        { icon: 'video camera', text: 'Channels' },
        { icon: 'video play', text: 'Videos' },
      ])

      return { items, args }
    },
    template: `
      <Menu :items="items" v-bind="args" />
    `,
  }),
  args: {
    icon: 'labeled',
  }
}

export default meta

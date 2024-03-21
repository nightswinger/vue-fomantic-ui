import type { Meta, StoryObj } from "@storybook/vue3"

import Item from "./Item"
import ItemGroup from "./ItemGroup"

type Story = StoryObj<typeof Item>

const meta: Meta<typeof Item> = {
  title: "Item",
  component: Item,
}

export const Default: Story = {
  render: (args) => ({
    components: { Item },
    setup: () => {
      return { args }
    },
    template: `
      <Item v-bind="args" />
    `,
  }),
}

export const Items: Story = {
  render: (args) => ({
    components: { Item, ItemGroup },
    setup: () => {
      return { args }
    },
    template: `
      <ItemGroup>
        <Item>
          <template #image>
            <img src="./wireframe/image.png">
          </template>
          <template #header>
            Header
          </template>
          <template #metadata>
            Description
          </template>
          <template #description>
            <img src="./wireframe/short-paragraph.png">
          </template>
          <template #extra>
            Additional Details
          </template>
        </Item>
        <Item>
          <template #image>
            <img src="./wireframe/image.png">
          </template>
          <template #header>
            Header
          </template>
          <template #metadata>
            Description
          </template>
          <template #description>
            <img src="./wireframe/short-paragraph.png">
          </template>
          <template #extra>
            Additional Details
          </template>
        </Item>
      </ItemGroup>
    `,
  }),
}

export default meta

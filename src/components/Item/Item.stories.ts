import type { Meta, StoryObj } from "@storybook/vue3"

import Item from "./Item"
import ItemGroup from "./ItemGroup"
import ItemContent from "./ItemContent"

import FHeader from "../Header/Header"
import FImage from "../Image/Image"

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

export const Image: Story = {
  render: (args) => ({
    components: { Item, ItemGroup },
    setup: () => {
      return { args }
    },
    template: `
      <ItemGroup divided>
        <Item v-for="i in [1,2,3]">
          <template #image>
            <img src="./wireframe/image.png">
          </template>
        </Item>
      </ItemGroup>
    `,
  }),
}

export const Content: Story = {
  render: (args) => ({
    components: { Item, ItemGroup, ItemContent },
    setup: () => {
      return { args }
    },
    template: `
      <ItemGroup divided>
        <Item v-for="v in ['A','B','C']">
          <template #image>
            <img src="./wireframe/image.png">
          </template>
          <ItemContent verticalAlign="middle">
            Content {{ v }}
          </ItemContent>
        </Item>
      </ItemGroup>
    `,
  }),
}

export const Header: Story = {
  render: (args) => ({
    components: { Item, ItemGroup, ItemContent },
    setup: () => {
      return { args }
    },
    template: `
      <ItemGroup>
        <Item v-for="text in ['12 Years a Slave', 'My Neighbor Totoro', 'Watchmen']">
          <template #image>
            <img src="./wireframe/image.png">
          </template>
          <ItemContent verticalAlign="middle">
            <template #header>
              {{ text }}
            </template>
          </ItemContent>
        </Item>
      </ItemGroup>
    `,
  }),
}

export const Metadata: Story = {
  render: (args) => ({
    components: { Item, ItemGroup, ItemContent, FImage },
    setup: () => {
      return { args }
    },
    template: `
      <ItemGroup>
        <Item>
          <FImage wrapped size="small" src="./wireframe/image.png" />
          <ItemContent>
            <template #header>
              Arrowhead Valley Camp
            </template>
            <template #metadata>
              <span class="price">$1200</span>
              <span class="stay">1 Month</span>
            </template>
            <template #description>
              <img src="./wireframe/short-paragraph.png">
            </template>
          </ItemContent>
        </Item>
      </ItemGroup>
    `,
  }),
}

export const Link: Story = {
  render: (args) => ({
    components: { Item, ItemGroup, ItemContent, FHeader, FImage },
    setup: () => {
      return { args }
    },
    template: `
      <ItemGroup>
        <Item>
          <FImage as="a" size="tiny" src="./avatar/large/stevie.jpg" />
          <ItemContent>
            <FHeader as="a">Stevie Feliciano</FHeader>
            <template #description>
              <p>Stevie Feliciano is a <a>library scientist</a> living in New York City. She likes to spend her time reading, running, and writing.</p>
            </template>
          </ItemContent>
        </Item>
      </ItemGroup>
    `,
  }),
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Item, ItemGroup, ItemContent, FHeader, FImage },
    setup: () => {
      return { args }
    },
    template: `
      <ItemGroup>
        <Item v-bind="args">
          <FImage as="a" size="tiny" src="./avatar/large/stevie.jpg" />
          <ItemContent>
            <FHeader as="a">Stevie Feliciano</FHeader>
            <template #description>
              <p>Stevie Feliciano is a <a>library scientist</a> living in New York City. She likes to spend her time reading, running, and writing.</p>
            </template>
          </ItemContent>
        </Item>
      </ItemGroup>
    `,
  }),
  args: {
    disabled: true,
  }
}

export default meta

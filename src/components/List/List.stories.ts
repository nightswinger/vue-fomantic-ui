import { ref } from "vue"
import type { Meta, StoryObj } from "@storybook/vue3"

import List from "./List"
import ListItem from "./ListItem"
import ListHeader from "./ListHeader"
import ListDescription from "./ListDescription"

import Icon from "../Icon/Icon"

type Story = StoryObj<typeof List>

const meta: Meta<typeof List> = {
  title: "List",
  component: List,
}

export const Default: Story = {
  name: 'List',
  render: (args) => ({
    components: { List },
    setup: () => {
      const items = ref(['Apples', 'Pears', 'Oranges'])
      return { args, items }
    },
    template: `
      <List v-bind="args" :items="items">
      </List>
    `,
  }),
}

export const WithIcon: Story = {
  render: (args) => ({
    components: { List, ListItem },
    setup: () => {
      const items = ref([
        { icon: 'users', content: 'Fomantic UI' },
        { icon: 'marker', content: 'Worldwide' },
        { icon: 'mail', content: 'contact@fomantic-ui.com' },
        { icon: 'linkify', content: 'fomantic-ui.com' },
      ])
      return { args, items }
    },
    template: `
      <List v-bind="args">
        <ListItem
          v-for="item in items"
          :key="item.content"
          :icon="item.icon"
        >
          <template v-if="item.icon === 'mail'">
            <a :href="'mailto:' + item.content">{{ item.content }}</a>
          </template>
          <template v-else-if="item.icon === 'linkify'">
            <a :href="'https://' + item.content">{{ item.content }}</a>
          </template>
          <template v-else>
            {{ item.content }}
          </template>
        </ListItem>
      </List>
    `,
  }),
}

export const withHeaderDescription: Story = {
  render: (args) => ({
    components: { List, ListItem, ListHeader, ListDescription, Icon },
    setup: () => {
      const items = ref([
        { header: 'fomantic/Fomantic-UI', description: 'Updated 10 mins ago', as: 'a' },
        { header: 'fomantic/Fomantic-UI-Docs', description: 'Updated 22 mins ago', as: 'a' },
        { header: 'fomantic/Fomantic-UI-LESS', description: 'Updated 34 mins ago', as: 'a' },
      ])
      return { args, items }
    },
    template: `
      <List v-bind="args">
        <ListItem
          v-for="item in items"
          :key="item.header"
        >
          <template #prepend>
            <Icon name="github" size="large" aligned="middle" />
          </template>

          <ListHeader as="a">{{ item.header }}</ListHeader>
          <ListDescription>{{ item.description }}</ListDescription>
        </ListItem>
      </List>
    `,
  }),
}

export const ListTree: Story = {
  render: (args) => ({
    components: { List },
    setup: () => {
      const items = ref([
        {
          icon: 'folder',
          header: 'src',
          description: 'Source files for project',
          children: [
            {
              icon: 'folder',
              header: 'site',
              description: 'Your site\'s theme',
            },
            {
              icon: 'folder',
              header: 'themes',
              description: 'Packaged theme files',
              children: [
                {
                  icon: 'folder',
                  header: 'default',
                  description: 'Default packaged theme',
                },
                {
                  icon: 'folder',
                  header: 'my_theme',
                  description: 'Packaged themes are also available in this folder',
                },
              ],
            },
            {
              icon: 'file',
              header: 'theme.config',
              description: 'Config file for setting packaged themes',
            }
          ]
        },
        {
          icon: 'folder',
          header: 'dist',
          description: 'Compiled CSS and JS files',
          children: [
            {
              icon: 'folder',
              header: 'components',
              description: 'Individual component CSS and JS',
            }
          ]
        },
        {
          icon: 'file',
          header: 'semantic.json',
          description: 'Contains build settings for gulp',
        }
      ])
      return { args, items }
    },
    template: `
      <List v-bind="args" :items="items">
      </List>
    `,
  }),
}

export const Bulleted: Story = {
  render: (args) => ({
    components: { List },
    setup: () => {
      const items = ref([
        { text: 'Gaining Access' },
        { text: 'Inviting Friends' },
        {
          text: 'Benefits',
          children: [
            { text: 'Link to somewhere', as: 'a' },
            { text: 'Rebates' },
            { text: 'Discounts' },
          ]
        },
        { text: 'Warranty' },
      ])
      return { args, items }
    },
    template: `
      <List v-bind="args" :items="items">
      </List>
    `,
  }),
  args: {
    bulleted: true,
  }
}

export default meta

import { ref } from "vue"
import type { Meta, StoryObj } from "@storybook/vue3"

import Dropdown from "./Dropdown"

type Story = StoryObj<typeof Dropdown>

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown",
  component: Dropdown,
};

export const Default: Story = {
  name: "Dropdown",
  render: (args) => ({
    components: { Dropdown },
    setup() {
      const selected = ref()
      const options = [
        { text: "New" },
        { text: "Open...", description: "ctrl + o" },
        { text: "Save as...", description: "ctrl + s" },
        { text: "Rename", description: "ctrl + r" },
        { text: "Make a copy" },
        { text: "Move to folder", icon: "folder" },
        { text: "Move to trash", icon: "trash" },
        { divider: true },
        { text: "Download as..." },
        {
          text: "Publish To Web",
          icon: "dropdown",
          children: [
            { text: "Google Docs" },
            { text: "Google Drive" },
            { text: "Dropbox" },
            { text: "Adobe Creative Cloud" },
            { text: "Private FTP" },
            { text: "Another Service..." },
          ],
        },
        { text: "E-mail Collaborators" },
      ]
      return { args, selected, options }
    },
    template: `
      <Dropdown
        v-bind="args"
        v-model="selected"
        text="File"
        :options="options"
      />
    `,
  }),
}

export const Search: Story = {
  render: (args) => ({
    components: { Dropdown },
    setup() {
      const selected = ref()
      const options = [
        { text: 'Arabic' },
        { text: 'Chinese' },
        { text: 'Dutch' },
        { text: 'English' },
        { text: 'French' },
        { text: 'German' },
        { text: 'Italian' },
        { text: 'Japanese' },
        { text: 'Korean' },
        { text: 'Portuguese' },
        { text: 'Russian' },
        { text: 'Spanish' },
        { text: 'Thai' },
        { text: 'Turkish' },
      ]
      return { args, selected, options }
    },
    template: `
      <Dropdown
        v-bind="args"
        v-model="selected"
        text="Select Language"
        :options="options"
      />
    `,
  }),
  args: {
    button: true,
    floating: true,
    labeled: true,
    search: true,
    icon: "world",
  }
}

export default meta

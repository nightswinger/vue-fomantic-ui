import type { Meta, StoryObj } from "@storybook/vue3"

import Message from "./Message"

import Icon from "../Icon/Icon"

type Story = StoryObj<typeof Message>

const meta: Meta<typeof Message> = {
  title: "Message",
  component: Message,
}

export const Default: Story = {
  render: (args) => ({
    components: { Message },
    setup: () => {
      return { args }
    },
    template: `
      <Message
        header="Changes in Service"
        content="We just updated our privacy policy here to better service our customers. We recommend reviewing the changes."
      />
    `,
  }),
}

export const ListMessage: Story = {
  render: (args) => ({
    components: { Message },
    setup: () => {
      return { args }
    },
    template: `
      <Message
        header="New Site Features"
        :list="[
          'You can now have cover images on profile pages',
          'Drafts will now auto-save while writing',
        ]"
      />
    `,
  }),
}

export const IconMessage: Story = {
  render: (args) => ({
    components: { Message, Icon },
    setup: () => {
      return { args }
    },
    template: `
      <Message
        icon="inbox"
        header="Have you heard about our mailing list?"
        content="Get the best news in your e-mail every day."
      />
      <Message
        icon
        header="Just one second"
        content="We're fetching that content for you."
      >
        <Icon name="notched circle" loading />
      </Message>
    `,
  }),
}

export const DismissableBlock: Story = {
  render: (args) => ({
    components: { Message, Icon },
    setup: () => {
      return { args }
    },
    template: `
      <Message
        header="Welcome back!"
        content="This is a special notification which you can dismiss if you're bored with it."
        @close="() => console.log('closed')"
        v-bind="args"
      />
    `,
  }),
  args: {
    closable: true,
  }
}

export const Aligned: Story = {
  render: (args) => ({
    components: { Message },
    setup: () => {
      return { args }
    },
    template: `
      <Message
        header="New Version is available!"
        content="When are you going to update?"
        v-bind="args"
      />
    `,
  }),
  args: {
    aligned: "center",
  },
  argTypes: {
    aligned: {
      control: 'select',
      options: ["center", "right"],
    },
  }
}

export default meta

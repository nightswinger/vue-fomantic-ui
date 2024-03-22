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

export default meta

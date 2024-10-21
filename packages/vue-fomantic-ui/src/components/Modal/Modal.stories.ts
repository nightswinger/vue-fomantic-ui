import { ref } from "vue"
import type { Meta, StoryObj } from "@storybook/vue3"

import Modal from "./Modal"
// import ModalHeader from "./ModalHeader"
// import ModalContent from "./ModalContent"

import Button from "../Button/Button"

type Story = StoryObj<typeof Modal>

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  render: (args) => ({
    components: { Modal },
    setup: () => {
      const isOpen = ref(false);
      const open = () => isOpen.value = true
      const close = () => isOpen.value = false

      return { args, isOpen, open, close }
    },
    template: `
      <button @click="open">open</button>
      <Modal v-bind="args" :modelValue="isOpen" @update:modelValue="close">
        <template #header>
          header
        </template>
        <template #content>
          content
        </template>
      </Modal>
    `,
  }),
  args: {
  },
  argTypes: {
    dimmer: {
      control: { type: "select" },
      options: [undefined, "inverted", "blurring"],
    },
  }
};

export const Default: Story = {}

export const CloseIcon: Story = {
  render: (args) => ({
    components: { Modal, Button },
    setup: () => {
      const isOpen = ref(false);
      const open = () => isOpen.value = true

      return { args, isOpen, open }
    },
    template: `
      <button @click="open">open</button>
      <Modal v-bind="args" v-model="isOpen">
        <template #header>
          Archive Old Messages
        </template>
        <template #content>
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
        </template>
        <template #actions>
          <Button color="red" icon="remove" content="No" />
          <Button color="green" icon="checkmark" content="Yes" />
        </template>
      </Modal>
    `,
  }),
  args: {
    closeIcon: true,
  }
}

export default meta

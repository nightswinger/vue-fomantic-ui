import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";

import Modal from "./Modal";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";

type Story = StoryObj<typeof Modal>;

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  render: (args) => ({
    components: { Modal, ModalHeader, ModalContent },
    setup: () => {
      const isOpen = ref(false);
      const open = () => isOpen.value = true;
      const close = () => isOpen.value = false;

      return { args, isOpen, open, close };
    },
    template: `
      <button @click="open">open</button>
      <Modal v-bind="args" :modelValue="isOpen" @update:modelValue="close">
        <ModalHeader>
          header
        </ModalHeader>
        <ModalContent>
          content
        </ModalContent>
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

export const Default: Story = {};

export default meta;

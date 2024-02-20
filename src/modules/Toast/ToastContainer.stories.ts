import type { Meta, StoryObj } from "@storybook/vue3";

import ToastContainer from "./ToastContainer";
import { Position, useToast } from "./toasts";

type Story = StoryObj<typeof ToastContainer>;

const meta: Meta<typeof ToastContainer> = {
  title: "ToastContainer",
  component: ToastContainer,
  render: (args) => ({
    setup: () => {
      const { toast } = useToast();

      const onClick = () => {
        toast({
          message: "Look, I'm here !",
          position: args.position as Position,
          attached: args.attached,
        });
      };

      return { args, onClick };
    },
    template: `
      <button @click="onClick">Run</button>
    `
  }),
};

export const Default: Story = {
  args: {
    position: "top left",
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['top right', 'top center', 'top left', 'bottom right', 'bottom center', 'bottom left', 'centered'],
    },
  }
};

export const AttachedPosition: Story = {
  args: {
    attached: "top",
  },
  argTypes: {
    attached: {
      control: 'select',
      options: ['top', 'bottom'],
    },
  }
};

export default meta;

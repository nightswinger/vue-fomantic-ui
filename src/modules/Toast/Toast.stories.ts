import type { Meta, StoryObj } from "@storybook/vue3";

import { Toast } from "./Toast";
import { useToast } from "./toasts";

type Story = StoryObj<typeof Toast>;

const meta: Meta<typeof Toast> = {
  title: "Toast",
  component: Toast,
  render: (args) => ({
    setup: () => {
      const { toast } = useToast();

      const onClick = () => {
        toast({ ...args });
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
    message: 'I am a toast, nice to meet you !',
  },
};

export const Titled: Story = {
  args: {
    title: 'Better ?',
    message: 'Hey look, I have a title !',
  },
};

export const ProgressBars: Story = {
  args: {
    showProgress: 'bottom',
    showProgressColor: undefined,
    title: 'LOOK',
    message: 'See, how long i will last',
    displayTime: 3000,
  },
  argTypes: {
    showProgressColor: {
      control: 'text',
    }
  }
};

export const ToastType: Story = {
  args: {
    type: 'success',
    message: "You're using the good framework !",
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['success', 'error', 'warning', 'info'],
    },
  },
};

export const CenterAligned: Story = {
  args: {
    centered: true,
    title: 'Veronika has joined',
    message: 'Welcome to the Fomantic-UI community!',
  }
};

export const Duration: Story = {
  args: {
    displayTime: 5000,
    message: 'You will see me for 5 seconds.',
  },
};

export const MessageStyle: Story = {
  args: {
    messageStyle: true,
    color: 'purple',
    title: 'Awesome',
    message: 'I got my style from the message class',
  }
};

export default meta;

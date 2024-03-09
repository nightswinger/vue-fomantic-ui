import { h } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";

import { Toast } from "./Toast";
import { useToast } from "./useToast";

import { Button } from "../Button";
import { Icon } from "../Icon";

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

export const IncreasingProgressBar: Story = {
  args: {
    showProgress: 'top',
    showProgressUp: true,
    title: 'LOOK',
    message: 'See, how long i will last',
  },
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

export const ColorVariants: Story = {
  args: {
    color: 'red',
    inverted: false,
    message: 'I am a colorful toast',
    showProgress: 'bottom',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'],
    }
  }
};

export const Actions: Story = {
  render: (args) => ({
    setup: () => {
      const { toast } = useToast();

      const actions = ({ close }) => [
        h(Button,
          {
            color: 'green',
            onclick: () => {
              toast({ message: 'You clicked "yes", toast closes by default' });
              close();
            }
          },
          () => [h(Icon, { name: 'check' }), 'Yes']
        ),
        h(Button, { color: 'red', icon: true }, () => [h(Icon, { name: 'ban' })]),
        h(Button,
          {
            color: 'blue',
            onclick: () => toast({ message:'Returning false from the click handler avoids closing the toast ' }),
          },
          () => '?'
        ),
      ];

      const onClick = () => {
        toast({ ...args, actions });
      };

      return { args, onClick };
    },
    template: `
      <button @click="onClick">Run</button>
    `
  }),
  args: {
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    color: 'black',
  },
};

export const ActionsBasic: Story = {
  render: (args) => ({
    setup: () => {
      const { toast } = useToast();

      const actions = ({ close }) => [
        h(Button,
          {
            color: 'yellow',
            onclick: () => {
              toast({ message: 'You clicked "yes", toast closes by default' });
              close();
            }
          },
          () => 'Yes, really'
        ),
      ];

      const onClick = () => {
        toast({ ...args, actions });
      };

      return { args, onClick };
    },
    template: `
      <button @click="onClick">Run</button>
    `
  }),
  args: {
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    color: 'black',
    actionsProps: { basic: true, aligned: 'left' },
  },
};

export const ActionsAttached: Story = {
  render: (args) => ({
    setup: () => {
      const { toast } = useToast();

      const actions = ({ close }) => [
        h(Button,
          {
            color: 'green',
            onclick: () => {
              toast({ message: 'You clicked "yes", toast closes by default' });
              close();
            }
          },
          () => 'Yes, really'
        ),
        h(Button,
          {
            color: 'red',
            onclick: () => {
              toast({ message: 'You clicked "yes", toast closes by default' });
              close();
            }
          },
          () => 'Maybe later'
        )
      ];

      const onClick = () => {
        toast({ ...args, actions });
      };

      return { args, onClick };
    },
    template: `
      <button @click="onClick">Run</button>
    `
  }),
  args: {
    message: 'Do you really want to star Fomantic-UI?',
    displayTime: 0,
    color: 'black',
    actionsProps: { attached: 'top', vertical: false },
  },
};

export default meta;

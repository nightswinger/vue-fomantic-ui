import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";

import Progress from "./Progress";
import Segment from "../Segment/Segment";

type Story = StoryObj<typeof Progress>;

const meta: Meta<typeof Progress> = {
  title: "Progress",
  component: Progress,
  render: (args) => ({
    components: { Progress },
    setup: () => {
      return { args }
    },
    template: `
      <Progress v-bind="args" />
    `,
  }),
};

export const Default: Story = {
  args: {
    label: 'Uploading Files',
    percent: 6,
  }
};

export const Indicating: Story = {
  render: (args) => ({
    components: { Progress },
    setup: () => {
      const percent = ref(20);
      const onClick = () => {
        percent.value >= 100 ? percent.value = 0 : percent.value += 20;
      };

      return { args, percent, onClick };
    },
    template: `
      <Progress v-bind="args" :percent="percent" />
      <button @click="onClick">Increment</button>
    `,
  }),
  args: {
    indicating: true,
  }
};

export const ProgressText: Story = {
  args: {
    percent: 48,
    progress: true,
  }
};

export const CenteredProgressText: Story = {
  args: {
    percent: 7,
    progress: 'centered',
  }
};

export const State: Story = {
  args: {
    active: true,
    progress: true,
    percent: 100,
    success: false,
    warning: false,
    error: false,
    disabled: false,
  },
};

export const Indeterminate: Story = {
  args: {
    color: 'blue',
    indeterminate: true,
  },
  argTypes: {
    indeterminate: {
      control: 'select',
      options: [true, 'filling', 'sliding', 'swinging', 'slow', 'fast'],
    }
  },
};

export const Attached: Story = {
  render: () => ({
    components: { Progress, Segment },
    template: `
      <Segment>
        <Progress percent="50" attached="top" />
        La la la la
        <Progress percent="50" attached="bottom" />
      </Segment>
    `,
  }),
};

export const Size: Story = {
  args: {
    percent: 100,
    size: 'medium',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['tiny', 'small', 'medium', 'large', 'huge'],
    }
  },

};

export const Color: Story = {
  args: {
    percent: 100,
    color: 'red',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'],
    }
  },
};

export default meta;

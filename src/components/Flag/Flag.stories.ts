import type { Meta, StoryObj } from "@storybook/vue3";

import Flag from "./Flag";

type Story = StoryObj<typeof Flag>;

const meta: Meta<typeof Flag> = {
  title: "Flag",
  component: Flag,
  render: (args) => ({
    components: { Flag },
    setup: () => {
      return { args }
    },
    template: `
      <Flag v-bind="args" />
    `,
  }),
};

export const Default: Story = {
  args: {
    name: "us",
    size: "medium"
  },
};

export default meta;

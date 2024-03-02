import type { Meta, StoryObj } from "@storybook/vue3";

import Label from "./Label";

type Story = StoryObj<typeof Label>;

const meta: Meta<typeof Label> = {
  title: "Label",
  component: Label,
  render: (args) => ({
    components: { Label },
    setup: () => {
      return { args }
    },
    template: `
      <Label v-bind="args" />
    `,
  }),
};

export const Default: Story = {};

export const Icon: Story = {
  render: (args) => ({
    components: { Label },
    setup: () => {
      return { args }
    },
    template: `
      <Label v-bind="args">23
      </Label>
    `,
  }),
  args: {
    icon: "user",
  },
};

export default meta;

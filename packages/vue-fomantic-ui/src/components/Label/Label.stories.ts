import type { Meta, StoryObj } from "@storybook/vue3";

import Label from "./Label";

import FIcon from "../Icon/Icon";

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

export const Default: Story = {
  name: "Label",
  render: (args) => ({
    components: { Label },
    setup: () => {
      return { args }
    },
    template: `
      <Label v-bind="args" />
    `,
  }),
  args: {
    icon: 'mail',
    content: '23',
  },
};

export const Icon: Story = {
  render: (args) => ({
    components: { Label, FIcon },
    setup: () => {
      return { args }
    },
    template: `
      <Label icon="mail" />
      <Label icon="checkmark" content="Test Passed" />
      <Label icon="dog" content="Dog" iconPos="right" />
      <Label iconPos="right">
        Cat
        <FIcon name="cat" />
      </Label>
    `,
  }),
};

export default meta;

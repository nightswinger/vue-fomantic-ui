import type { Meta, StoryObj } from "@storybook/vue3";

import Divider from "./Divider";

type Story = StoryObj<typeof Divider>;

const meta: Meta<typeof Divider> = {
  title: "Divider",
  component: Divider,
  render: (args) => ({
    components: { Divider },
    setup: () => {
      return { args }
    },
    template: `
      <Divider v-bind="args" />
    `,
  }),
};

export const Default: Story = {};

export const Size: Story = {
  render: (args) => ({
    components: { Divider },
    setup: () => {
      return { args }
    },
    template: `
      <Divider horizontal size="mini">Mini</Divider>
      <Divider horizontal size="tiny">Tiny</Divider>
      <Divider horizontal size="small">Small</Divider>
      <Divider horizontal size="medium">Medium</Divider>
      <Divider horizontal size="large">Large</Divider>
      <Divider horizontal size="big">Big</Divider>
      <Divider horizontal size="huge">Huge</Divider>
      <Divider horizontal size="massive">Massive</Divider>
    `,
  }),
};

export default meta;

import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "./Button";
import { Icon } from "../../elements/Icon";
import { h } from "vue";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  render: (args) => ({
    components: { Button },
    setup: () => {
      return { args }
    },
    template: `
      <Button v-bind="args" />
    `,
  }),
};

export const Default: Story = {
  args: {
    content: 'Button',
  },
};

export const IconButton: Story = {
  render: (args) => ({
    components: { Button, Icon },
    setup: () => {
      return { args }
    },
    template: `
      <Button icon>
        <Icon name="cloud" />
      </Button>
      <Button icon="heart" />
    `,
  }),
};

export const Loading: Story = {
  render: (args) => ({
    components: { Button },
    setup: () => {
      return { args }
    },
    template: `
      <Button loading content="Loading" />
      <Button loading="double" content="Loading" />
      <Button loading="elastic" content="Loading" />
    `,
  }),
};

export default meta;

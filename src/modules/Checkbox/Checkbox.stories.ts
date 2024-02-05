import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";

import Checkbox from "./Checkbox";

type Story = StoryObj<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
  render: (args) => ({
    components: { Checkbox },
    setup: () => {
      const value = ref(false);
      const onChange = (v: boolean) => value.value = v;

      return { args, value, onChange }
    },
    template: `
      <Checkbox v-bind="args" :modelValue="value" @update:modelValue="onChange" />
    `,
  }),
  args: {
    label: "Radio choice",
    radio: true
  }
};

export const Default: Story = {};

export default meta;

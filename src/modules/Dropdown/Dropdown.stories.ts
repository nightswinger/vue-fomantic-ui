import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";

import Dropdown from "./Dropdown";

type Story = StoryObj<typeof Dropdown>;

const meta: Meta<typeof Dropdown> = {
  title: "Dropdown",
  component: Dropdown,
  render: (args) => ({
    components: { Dropdown },
    setup: () => {
      const value = ref('');
      const onChange = (v: string) => value.value = v;

      return { args, value, onChange }
    },
    template: `
      <Dropdown
        selection
        multiple
        fluid
        search
        v-bind="args"
        :modelValue="value"
        @update:modelValue="onChange"
        :options="[
          { value: 'af', flag: 'af', text: 'Afghanistan' },
          { value: 'ax', flag: 'ax', text: 'Aland Islands' },
          { value: 'al', flag: 'al', text: 'Albania' },
          { value: 'dz', flag: 'dz', text: 'Algeria' },
          { value: 'as', flag: 'as', text: 'American Samoa' }
        ]"
      />
    `,
  }),
  args: {
    placeholder: "Select Country",
    selection: true,
    multiple: true,
    fluid: true,
    search: true,
  }
};

export const Default: Story = {};

export default meta;

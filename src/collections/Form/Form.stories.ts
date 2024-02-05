import type { Meta, StoryObj } from "@storybook/vue3";

import Form from "./Form";
import FormField from "./FormField";

type Story = StoryObj<typeof FormField>;

const meta: Meta<typeof FormField> = {
  title: "FormField",
  component: FormField,
  render: (args) => ({
    components: { Form, FormField },
    setup: () => ({ args }),
    template: `
      <Form>
        <FormField v-bind="args" />
      </Form>
    `,
  }),
  args: {
    disabled: false,
    label: "Label",
    placeholder: "Placeholder",
  },
  argTypes: {
    "onUpdate:modelValue": { action: "update:modelValue" },
  }
};

export const Default: Story = {};

export default meta;

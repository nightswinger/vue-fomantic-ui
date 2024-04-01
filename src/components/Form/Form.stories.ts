import type { Meta, StoryObj } from "@storybook/vue3";

import Form from "./Form";
import FormField from "./FormField";

import Message from "../Message/Message";

type Story = StoryObj<typeof Form>;

const meta: Meta<typeof Form> = {
  title: "Form",
  component: Form,
  render: (args) => ({
    components: { Form, FormField },
    setup: () => ({ args }),
    template: `
      <Form>
        <FormField v-bind="args" />
      </Form>
    `,
  }),
};

export const Default: Story = {};

export const Info: Story = {
  render: (args) => ({
    components: { Form, FormField, Message },
    setup: () => ({ args }),
    template: `
      <Form info>
        <FormField
          label="New Password"
          type="password"
          placeholder="joe@schmoe.com"
        />
        <Message
          info
          header="Requirements"
          content="Password must contain at least 8 characters"
        >
        </Message>
      </Form>
    `,
  }),
};

export default meta;

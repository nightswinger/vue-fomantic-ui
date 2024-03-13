import type { Meta, StoryObj } from "@storybook/vue3"

import Step from "./Step"
import StepGroup from "./StepGroup"

type Story = StoryObj<typeof StepGroup>

const meta: Meta<typeof StepGroup> = {
  title: "StepGroup",
  component: StepGroup,
  subcomponents: { Step },
}

export const Default: Story = {
  render: () => ({
    components: { Step, StepGroup },
    template: `
      <StepGroup>
        <Step>Shopping</Step>
      </StepGroup>
    `
  }),
};

export const Steps: Story = {
  render: () => ({
    components: { Step, StepGroup },
    template: `
      <StepGroup>
        <Step icon="truck" title="Shipping" description="Choose your shipping options" />
        <Step active icon="payment" title="Billing" description="Choose your shipping options" />
        <Step disabled icon="info" title="Confirm Order" />
      </StepGroup>
    `
  }),
}

export default meta;

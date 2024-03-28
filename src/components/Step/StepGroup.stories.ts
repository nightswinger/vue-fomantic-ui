import type { Meta, StoryObj } from "@storybook/vue3"

import { ref } from "vue"

import Step from "./Step"
import StepGroup from "./StepGroup"

import Button from "../Button/Button"

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
    components: { StepGroup, Button },
    setup: () => {
      const steps = ref([
        { title: "Shipping", description: "Choose your shipping options", icon: "truck" },
        { title: "Billing", description: "Enter billing information", icon: "payment" },
        { title: "Confirm Order", icon: "info" },
      ])
      const active = ref(1)

      return { steps, active }
    },
    template: `
      <StepGroup
        :steps="steps"
        :activeStep="active"
      >
      </StepGroup>
      <div>
        <Button icon="minus" @click="active--" :disabled="active < 0" />
        <Button icon="plus" @click="active++" :disabled="active > 2" />
      </div>
    `
  }),
}

export default meta

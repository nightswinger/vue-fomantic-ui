import type { Meta, StoryObj } from "@storybook/vue3";

import Transition from "./Transition";
import { Image } from "../../elements/Image";

type Story = StoryObj<typeof Transition>;

const meta: Meta<typeof Transition> = {
  title: "Transition",
  component: Transition,
  render: (args) => ({
    components: { SuiTransition: Transition, Image },
    setup: () => {
      return { args };
    },
    template: `
      <SuiTransition v-bind="args">
        <Image src="4.png" />
      </SuiTransition>
    `,
  }),
  args: {
    animation: "fade",
    duration: 500,
    visible: true,
    looping: false,
  },
};

export const Default: Story = {};

export default meta;

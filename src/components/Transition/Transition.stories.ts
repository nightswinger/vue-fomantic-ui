import type { Meta, StoryObj } from "@storybook/vue3";

import Transition from "./Transition";
import { Image } from "../../elements/Image";
import { ref } from "vue";

type Story = StoryObj<typeof Transition>;

const meta: Meta<typeof Transition> = {
  title: "Transition",
  component: Transition,
  render: (args) => ({
    components: { SuiTransition: Transition, Image },
    setup: () => {
      const show = ref(false);

      return { args, show };
    },
    template: `
      <button @click="show = !show">Toggle</button>
      <SuiTransition v-bind="args">
        <Image v-if="show" src="4.png" />
      </SuiTransition>
    `,
  }),
  args: {
    animation: "fade",
    duration: undefined,
  },
};

export const Default: Story = {};

export default meta;

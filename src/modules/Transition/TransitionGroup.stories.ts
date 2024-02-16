import type { Meta, StoryObj } from "@storybook/vue3";

import TransitionGroup from "./TransitionGroup";
import { Image } from "../../elements/Image";
import { ref } from "vue";

type Story = StoryObj<typeof TransitionGroup>;

const meta: Meta<typeof TransitionGroup> = {
  title: "TransitionGroup",
  component: TransitionGroup,
  render: (args) => ({
    components: { SuiTransitionGroup: TransitionGroup, Image },
    setup: () => {
      const items = ref([1,2,3,4]);

      return { args, items };
    },
    template: `
      <button @click="() => items = items.map((v) => v + 1)">Run</button>
      <SuiTransitionGroup v-bind="args">
        <Image src="image.png" size="small" v-for="item in items" :key="item" />
      </SuiTransitionGroup>
      {{ items }}
    `,
  }),
  args: {
    animation: "fade",
  },
};

export const Default: Story = {};

export default meta;

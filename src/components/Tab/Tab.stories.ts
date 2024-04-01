import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";

import Tab from "./Tab";
import TabPanel from "./TabPanel";

type Story = StoryObj<typeof Tab>;

const meta: Meta<typeof Tab> = {
  title: "Tab",
  component: Tab,
  render: (args) => ({
    components: { Tab, TabPanel },
    setup: () => {
      const value = ref(0);
      const onChange = (v: number) => value.value = v;

      return { args, value, onChange }
    },
    template: `
      <Tab>
        <TabPanel header="First">Content A</TabPanel>
        <TabPanel header="Second">Content B</TabPanel>
        <TabPanel header="Third">Content C</TabPanel>
      </Tab>
    `,
  }),
};

export const Default: Story = {};

export default meta;

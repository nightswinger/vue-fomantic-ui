import type { Meta, StoryObj } from "@storybook/vue3"

import Accordion from "./Accordion"
import AccordionTab from "./AccordionTab"

type Story = StoryObj<typeof AccordionTab>

const meta: Meta<typeof Accordion> = {
  title: "AccordionTab",
  component: AccordionTab,
  render: (args) => ({
    components: { Accordion, AccordionTab },
    setup: () => {
      return { args }
    },
    template: `
      <Accordion>
        <AccordionTab
          title="What is a dog?"
          v-bind="args"
        >
          <p>
            A dog is a type of domesticated animal. Known for its loyalty andfaithfulness, it can be found as a welcome guest in many households across the world.
          </p>
        </AccordionTab>
        <AccordionTab
          title="What kinds of dogs are there?"
          v-bind="args"
        >
          <p>
            There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.
          </p>
        </AccordionTab>
        <AccordionTab
          title="How do you acquire a dog?"
          v-bind="args"
        >
          <p>
            Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.
          </p>
        </AccordionTab>
      </Accordion>
    `,
  }),
}

export const Default: Story = {}

export const Icon: Story = {
  args: {
    icon: "question",
  }
}

export default meta

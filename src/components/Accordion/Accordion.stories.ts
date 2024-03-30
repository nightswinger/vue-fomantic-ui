import type { Meta, StoryObj } from "@storybook/vue3"

import  { ref } from "vue"

import Accordion from "./Accordion"
import AccordionTab from "./AccordionTab"

type Story = StoryObj<typeof Accordion>

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,

}

export const Default: Story = {
  render: (args) => ({
    components: { Accordion, AccordionTab },
    setup: () => {
      return { args }
    },
    template: `
      <Accordion>
        <AccordionTab
          title="What is a dog?"
        >
          <p>
            A dog is a type of domesticated animal. Known for its loyalty andfaithfulness, it can be found as a welcome guest in many households across the world.
          </p>
        </AccordionTab>
        <AccordionTab
          title="What is a dog?"
        >
          <p>
            A dog is a type of domesticated animal. Known for its loyalty andfaithfulness, it can be found as a welcome guest in many households across the world.
          </p>
        </AccordionTab>
        <AccordionTab
          title="What is a dog?"
        >
          <p>
            A dog is a type of domesticated animal. Known for its loyalty andfaithfulness, it can be found as a welcome guest in many households across the world.
          </p>
        </AccordionTab>
      </Accordion>
    `,
  }),
}

export const Styled: Story = {
  render: (args) => ({
    components: { Accordion, AccordionTab },
    setup: () => {
      return { args }
    },
    template: `
      <Accordion v-bind="args">
        <AccordionTab
          title="What is a dog?"
        >
          <p>
            A dog is a type of domesticated animal. Known for its loyalty andfaithfulness, it can be found as a welcome guest in many households across the world.
          </p>
        </AccordionTab>
        <AccordionTab
          title="What is a dog?"
        >
          <p>
            A dog is a type of domesticated animal. Known for its loyalty andfaithfulness, it can be found as a welcome guest in many households across the world.
          </p>
        </AccordionTab>
        <AccordionTab
          title="What is a dog?"
        >
          <p>
            A dog is a type of domesticated animal. Known for its loyalty andfaithfulness, it can be found as a welcome guest in many households across the world.
          </p>
        </AccordionTab>
      </Accordion>
    `,
  }),
  args: {
    styled: true,
  }
}

export const BasicStyled: Story = {
  render: (args) => ({
    components: { Accordion, AccordionTab },
    setup: () => {
      return { args }
    },
    template: `
      <Accordion v-bind="args">
        <AccordionTab
          title="What is a dog?"
        >
          <p>
            A dog is a type of domesticated animal. Known for its loyalty andfaithfulness, it can be found as a welcome guest in many households across the world.
          </p>
        </AccordionTab>
        <AccordionTab
          title="What kinds of dogs are there?"
        >
          <p>
            There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.
          </p>
        </AccordionTab>
        <AccordionTab
          title="How do you acquire a dog?"
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
  args: {
    basic: true,
  }
}

export default meta

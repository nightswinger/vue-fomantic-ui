import type { Meta, StoryObj } from "@storybook/vue3"

import Card from "./Card"
import CardContent from "./CardContent"
import CardGroup from "./CardGroup"

import Image from "../Image/Image"

type Story = StoryObj<typeof CardGroup>

const meta: Meta<typeof CardGroup> = {
  title: "CardGroup",
  component: CardGroup,
}

export const Default: Story = {
  render: (args) => ({
    components: { Card, CardContent, CardGroup, Image },
    setup() {
      return { args }
    },
    template: `<CardGroup v-bind="args">
      <Card>
        <Image wrapped src="./avatar/large/matthew.png" />
        <CardContent header="Matt Giampietro">
          <template #meta>
            <a>Friends</a>
          </template>
          <template #description>
            Matthew is an interior designer living in New York.
          </template>
        </CardContent>
      </Card>
    </CardGroup>`
  }),
  args: {
    horizontal: true,
  },
  argTypes: {
    horizontal: { control: { type: "boolean" } },
  }
}

export default meta

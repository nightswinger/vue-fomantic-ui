import type { Meta, StoryObj } from "@storybook/vue3"

import Card from "./Card"
import CardContent from "./CardContent"
import CardGroup from "./CardGroup"

import { Button, ButtonGroup } from "../Button"
import Icon from "../Icon/Icon"
import Image from "../Image/Image"
import Input from "../Input/Input"

type Story = StoryObj<typeof Card>

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  render: (args) => ({
    components: { Card, CardContent, Icon, Image, Input },
    template: `
      <Card>
        <Image src="./avatar/large/kristy.png" />
        <CardContent header="Kristy">
          <template #meta>
            <span>Joined in 2013</span>
          </template>
          <template #description>
            Kristy is an art director living in New York.
          </template>
        </CardContent>
        <CardContent extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Image avatar src="./avatar/large/elliot.jpg" />
          Elliot
          <template #meta>
            <span class="right floated">14h</span>
          </template>
        </CardContent>
        <Image src="./wireframe/image.png" />
        <CardContent>
          <span class="right floated">
            <Icon name="heart outline like" />
            17 likes
          </span>
          <Icon name="comment" />
          3 comments
        </CardContent>
        <CardContent extra>
          <Input
            icon="heart outline"
            iconPosition="left"
            size="large"
            transparent
            placeholder="Add Comment..."
          />
        </CardContent>
      </Card>
    `,
  }),
}

export const Default: Story = {}

export const Cards: Story = {
  render: (args) => ({
    components: { Card, CardContent, CardGroup, Button, ButtonGroup, Image },
    template: `
      <CardGroup>
        <Card>
          <CardContent>
            <template #header>
              Elliot Fu
              <Image size="mini" floated="right" src="./avatar/large/elliot.jpg" />
            </template>
            <template #meta>Friends of Veronika</template>
            <template #description>
              Elliot requested permission to view your contact details
            </template>
          </CardContent>
          <CardContent extra>
            <ButtonGroup :widths="2">
              <Button basic color="green">Approve</Button>
              <Button basic color="red">Decline</Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      </CardGroup>
    `
  }),
}

export default meta

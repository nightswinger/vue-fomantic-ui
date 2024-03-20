import type { Meta, StoryObj } from "@storybook/vue3"

import Feed from "./Feed"
import FeedEvent from "./FeedEvent"

type Story = StoryObj<typeof Feed>

const meta: Meta<typeof Feed> = {
  title: "Feed",
  component: Feed,
}

export const Default: Story = {
  render: () => ({
    components: { Feed, FeedEvent },
    template: `
      <Feed>
        <FeedEvent>
          <template #label>
            <img src="./avatar/small/elliot.jpg">
          </template>
          <template #summary>
            <a class="user">
              Elliot Fu
            </a> added you as a friend
            <div class="date">
              1 hour ago
            </div>
          </template>
          <template #meta>
            <a class="like">
              <i class="like icon"></i> 4 Likes
            </a>
          </template>
        </FeedEvent>
        <FeedEvent>
          <template #label>
            <img src="./avatar/small/helen.jpg">
          </template>
          <template #summary>
            <a>Helen Troy</a> added <a>2 new illustrations</a>
            <div class="date">
              4 days ago
            </div>
          </template>
          <template #extraImages>
            <a><img src="./wireframe/image.png"></a>
            <a><img src="./wireframe/image.png"></a>
          </template>
          <template #meta>
            <a class="like">
              <i class="like icon"></i> 1 Like
            </a>
          </template>
        </FeedEvent>
        <FeedEvent>
          <template #label>
            <img src="./avatar/small/jenny.jpg">
          </template>
          <template #summary>
            <a class="user">
              Jenny Hess
            </a> added you as a friend
            <div class="date">
              2 days ago
            </div>
          </template>
          <template #meta>
            <a class="like">
              <i class="like icon"></i> 8 Likes
            </a>
          </template>
        </FeedEvent>
        <FeedEvent>
          <template #label>
            <img src="./avatar/small/joe.jpg">
          </template>
          <template #summary>
            <a>Joe Henderson</a> posted on his page
            <div class="date">
              3 days ago
            </div>
          </template>
          <template #extraText>
            Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.
          </template>
          <template #meta>
            <a class="like">
              <i class="like icon"></i> 5 Likes
            </a>
          </template>
        </FeedEvent>
        <FeedEvent>
          <template #label>
            <img src="./avatar/small/justen.jpg">
          </template>
          <template #summary>
            <a>Justen Kitsune</a> added <a>2 new photos</a> of you
            <div class="date">
              4 days ago
            </div>
          </template>
          <template #extraImages>
            <a><img src="./wireframe/image.png"></a>
            <a><img src="./wireframe/image.png"></a>
          </template>
          <template #meta>
            <a class="like">
              <i class="like icon"></i> 41 Like
            </a>
          </template>
        </FeedEvent>
      </Feed>
    `
  })
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Feed, FeedEvent },
    setup: () => {
      return { args }
    },
    template: `
      <Feed v-bind="args">
        <FeedEvent>
          <template #label>
            <img src="./avatar/small/elliot.jpg">
          </template>
          <template #summary>
            <a class="user">
              I am a feed event of a whole disabled feed
            </a>
          </template>
          <template #meta>
            <i class="like icon"></i> 4 Likes
          </template>
        </FeedEvent>
      </Feed>
    `
  }),
  args: {
    disabled: true,
  }
}

export default meta

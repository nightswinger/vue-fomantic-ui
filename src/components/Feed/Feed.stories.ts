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
              1 Hour Ago
            </div>
          </template>
          <template #meta>
            <a class="like">
              <i class="like icon"></i> 4 Likes
            </a>
          </template>
        </FeedEvent>
      </Feed>
    `
  })
}

export default meta

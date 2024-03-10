import type { Meta, StoryObj } from "@storybook/vue3";

import Comment from "./Comment";
import CommentGroup from "./CommentGroup";

import Button from "../Button/Button";
import Form from "../Form/Form";
import FormTextarea from "../Form/FormTextarea";

type Story = StoryObj<typeof Comment>;

const meta: Meta<typeof Comment> = {
  title: "Comment",
  component: Comment,
  render: (args) => ({
    components: { Comment, CommentGroup },
    setup: () => {
      return { args }
    },
    template: `
      <CommentGroup>
        <Comment v-bind="args" />
      </CommentGroup>
    `,
  }),
};

export const Default: Story = {
  render: (args) => ({
    components: { Comment, CommentGroup },
    setup: () => {
      return { args }
    },
    template: `
      <CommentGroup>
        <Comment>
          <template #avatar>
            <img src="./avatar/small/joe.jpg" alt="avatar" />
          </template>
          <template #author>
            Tom Lukic
          </template>
        </Comment>
      </CommentGroup>
    `,
  }),
};

export const Avatar: Story = {
  render: (args) => ({
    components: { Comment, CommentGroup },
    setup: () => {
      return { args }
    },
    template: `
      <CommentGroup>
        <Comment>
          <template #avatar>
            <img src="./avatar/small/joe.jpg" alt="avatar" />
          </template>
          <template #author>
            Elliot Fu
          </template>
        </Comment>
      </CommentGroup>
    `,
  }),
};

export const Metadata: Story = {
  render: (args) => ({
    components: { Comment, CommentGroup },
    setup: () => {
      return { args }
    },
    template: `
      <CommentGroup>
        <Comment>
          <template #avatar>
            <img src="./avatar/small/joe.jpg" alt="avatar" />
          </template>
          <template #author>
            Stevie Feliciano
          </template>
          <template #metadata>
            <div>2 days ago</div>
            <div class="rating">
              <i class="star icon"></i>
              5 Faves
            </div>
          </template>
          <template #text>
            Hey guys, I hope this example comment is helping you read this documentation.
          </template>
        </Comment>
      </CommentGroup>
    `,
  }),
};

export const Actions: Story = {
  render: (args) => ({
    components: { Comment, CommentGroup },
    setup: () => {
      return { args }
    },
    template: `
      <CommentGroup>
        <Comment>
          <template #avatar>
            <img src="./avatar/small/joe.jpg" alt="avatar" />
          </template>
          <template #author>
            Tom Lukic
          </template>
          <template #text>
            This will be great for business reports. I will definitely download this.
          </template>
          <template #actions>
            <a class="reply">Reply</a>
            <a class="save">Save</a>
            <a class="hide">Hide</a>
            <a>
              <i class="expand icon"></i>
              Full-screen
            </a>
          </template>
        </Comment>
      </CommentGroup>
    `,
  }),
};

export const ReplyForm: Story = {
  render: (args) => ({
    components: { Comment, CommentGroup, Button, Form, FormTextarea },
    setup: () => {
      return { args }
    },
    template: `
      <CommentGroup>
        <Comment>
          <template #avatar>
            <img src="./avatar/small/steve.jpg" alt="avatar" />
          </template>
          <template #author>
            Steve Jobes
          </template>
          <template #metadata>
            2 days ago
          </template>
          <template #text>
            Revolutionary!
          </template>
          <template #actions>
            <a class="active">Reply</a>
            <Form reply>
              <FormTextarea />
              <Button primary icon="edit" type="submit" content="Add Reply" />
            </Form>
          </template>
        </Comment>
      </CommentGroup>
    `,
  }),
};

export default meta;

<template>
  <DocSection label="Comments" :code="code">
    <template #description>
      A basic list of comments
    </template>
    <template #example>
      <CommentGroup>
        <Comment>
          <template #avatar>
            <img src="/images/avatar/small/matt.jpg" />
          </template>
          <template #author>
            Matt
          </template>
          <template #metadata>
            <span>Today at 5:42PM</span>
          </template>
          <template #text>
            How artistic!
          </template>
          <template #actions>
            <a>Reply</a>
          </template>
        </Comment>
        <Comment>
          <template #avatar>
            <img src="/images/avatar/small/elliot.jpg" />
          </template>
          <template #author>
            Elliot Fu
          </template>
          <template #metadata>
            <span>Yesterday at 12:30AM</span>
          </template>
          <template #text>
            This has been very useful for my research. Thanks as well!
          </template>
          <template #actions>
            <a>Reply</a>
          </template>
          <CommentGroup>
            <Comment>
              <template #avatar>
                <img src="/images/avatar/small/jenny.jpg" />
              </template>
              <template #author>
                Jenny Hess
              </template>
              <template #metadata>
                <span>Just now</span>
              </template>
              <template #text>
                Elliot you are always so right :)
              </template>
              <template #actions>
                <a>Reply</a>
              </template>
            </Comment>
          </CommentGroup>
        </Comment>
        <Comment>
          <template #avatar>
            <img src="/images/avatar/small/joe.jpg" />
          </template>
          <template #author>
            Joe Henderson
          </template>
          <template #metadata>
            <span>5 days ago</span>
          </template>
          <template #text>
            Dude, this is awesome. Thanks so much
          </template>
          <template #actions>
            <a>Reply</a>
          </template>
        </Comment>
      </CommentGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { CommentGroup, Comment } from 'vue-fomantic-ui'

const code = `<template>
  <CommentGroup>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/matt.jpg" />
      </template>
      <template #author>
        Matt
      </template>
      <template #metadata>
        <span>Today at 5:42PM</span>
      </template>
      <template #text>
        How artistic!
      </template>
      <template #actions>
        <a>Reply</a>
      </template>
    </Comment>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/elliot.jpg" />
      </template>
      <template #author>
        Elliot Fu
      </template>
      <template #metadata>
        <span>Yesterday at 12:30AM</span>
      </template>
      <template #text>
        This has been very useful for my research. Thanks as well!
      </template>
      <template #actions>
        <a>Reply</a>
      </template>
      <CommentGroup>
        <Comment>
          <template #avatar>
            <img src="/images/avatar/small/jenny.jpg" />
          </template>
          <template #author>
            Jenny Hess
          </template>
          <template #metadata>
            <span>Just now</span>
          </template>
          <template #text>
            Elliot you are always so right :)
          </template>
          <template #actions>
            <a>Reply</a>
          </template>
        </Comment>
      </CommentGroup>
    </Comment>
    <Comment>
      <template #avatar>
        <img src="/images/avatar/small/joe.jpg" />
      </template>
      <template #author>
        Joe Henderson
      </template>
      <template #metadata>
        <span>5 days ago</span>
      </template>
      <template #text>
        Dude, this is awesome. Thanks so much
      </template>
      <template #actions>
        <a>Reply</a>
      </template>
    </Comment>
  </CommentGroup>
<\/template>`
</script>

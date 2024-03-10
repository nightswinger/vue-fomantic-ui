<template>
  <DocSection label="Actions" :code="code">
    <template #description>
      A comment can contain an list of actions a user may perform related to this comment.
    </template>
    <template #example>
      <CommentGroup>
        <Comment>
          <template #avatar>
            <img src="/images/avatar/small/joe.jpg">
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
        <img src="/images/avatar/small/stevie.jpg" />
      </template>
      <template #author>
        Stevie Feliciano
      </template>
      <template #metadata>
        <div class="date">2 days ago</div>
        <div>
          <i class="star icon"></i>
          5 Faves
        </div>
      </template>
      <template #text>
        Hey guys, I hope this example comment is helping you read this documentation.
      </template>
    </Comment>
  </CommentGroup>
<\/template>`
</script>

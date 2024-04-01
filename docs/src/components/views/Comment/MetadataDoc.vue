<template>
  <DocSection label="Metadata" :code="code">
    <template #description>
      A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined.
    </template>
    <template #example>
      <CommentGroup>
        <Comment>
          <template #avatar>
            <img src="/images/avatar/small/stevie.jpg">
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

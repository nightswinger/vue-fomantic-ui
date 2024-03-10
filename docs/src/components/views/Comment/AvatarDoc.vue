<template>
  <DocSection label="Avatar" :code="code">
    <template #description>
      A comment can contain an image or avatar
    </template>
    <template #example>
      <CommentGroup>
        <Comment>
          <template #avatar>
            <img src="/images/avatar/small/elliot.jpg">
          </template>
          <template #author>
            Elliot Fu
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
        <img src="/images/avatar/small/elliot.jpg" />
      </template>
      <template #author>
        Elliot Fu
      </template>
    </Comment>
  </CommentGroup>
<\/template>`
</script>

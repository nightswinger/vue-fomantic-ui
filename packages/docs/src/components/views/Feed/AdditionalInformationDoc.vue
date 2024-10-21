<template>
  <DocSection label="Additional information" :code="code">
    <template #description>
      An event can contain additional information like a set of images or text
    </template>
    <template #example>
      <Feed>
        <FeedEvent>
          <template #label>
            <img src="/images/avatar/small/helen.jpg">
          </template>
          <template #summary>
            <a>Helen Troy</a> added 2 photos
            <div class="date">
              3 days ago
            </div>
          </template>
          <template #extraImages>
            <a><img src="/images/wireframe/image.png"></a>
            <a><img src="/images/wireframe/image.png"></a>
          </template>
        </FeedEvent>
        <FeedEvent>
          <template #label>
            <img src="/images/avatar/small/laura.jpg">
          </template>
          <template #summary>
            <a>Laura Faucet</a> created a post
            <div class="date">
              3 days ago
            </div>
          </template>
          <template #extraText>
            Have you seen what's going on in Israel? Can you believe it.
          </template>
        </FeedEvent>
      </Feed>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import {
  Feed,
  FeedEvent,
} from 'vue-fomantic-ui'

const code = `<template>
  <Feed>
    <FeedEvent>
      <template #label>
        <img src="/images/avatar/small/hellen.jpg">
      </template>
      <template #summary>
        <a>Helen Troy</a> added 2 photos
        <div class="date">
          3 days ago
        </div>
      </template>
      <template #extraImages>
        <a><img src="/images/wireframe/image.png"></a>
        <a><img src="/images/wireframe/image.png"></a>
      </template>
    </FeedEvent>
    <FeedEvent>
      <template #label>
        <img src="/images/avatar/small/laura.jpg">
      </template>
      <template #summary>
        <a>Laura Faucet</a> created a post
        <div class="date">
          3 days ago
        </div>
      </template>
      <template #extraText>
        Have you seen what's going on in Israel? Can you believe it.
      </template>
    </FeedEvent>
  </Feed>
<\/template>`
</script>

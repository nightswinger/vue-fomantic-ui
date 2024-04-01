<template>
  <DocSection label="Label" :code="code">
    <template #description>
      An event label can contain an image, icon, text or label
    </template>
    <template #example>
      <Feed>
        <FeedEvent>
          <template #label>
            <img src="/images/avatar/small/elliot.jpg">
          </template>
          <template #summary>
            You added Elliot Fu to the group <a>Coworkers</a>
          </template>
        </FeedEvent>
        <FeedEvent>
          <template #label>
            <Icon name="pencil" />
          </template>
          <template #summary>
            You posted on your friend <a>Stevie Feliciano's</a> wall.
            <div class="date">Today</div>
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
  Icon,
} from 'vue-fomantic-ui'

const code = `<template>
  <Feed>
    <FeedEvent>
      <template #label>
        <img src="/images/avatar/small/elliot.jpg">
      </template>
      <template #summary>
        You added Elliot Fu to the group <a>Coworkers</a>
      </template>
    </FeedEvent>
    <FeedEvent>
      <template #label>
        <Icon name="pencil" />
      </template>
      <template #summary>
        You posted on your friend <a>Stevie Feliciano's</a> wall.
        <div class="date">Today</div>
      </template>
    </FeedEvent>
  </Feed>
<\/template>`
</script>

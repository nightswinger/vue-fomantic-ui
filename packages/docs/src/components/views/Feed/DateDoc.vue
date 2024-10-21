<template>
  <DocSection label="Date" :code="code">
    <template #description>
      An event or an event summary can contain a date
    </template>
    <template #example>
      <Feed>
        <FeedEvent>
          <template #label>
            <img src="/images/avatar/small/jenny.jpg">
          </template>
          <template #summary>
            You added <a>Jenny Hess</a> to your <a>coworker</a> group.
            <div class="date">
              3 days ago
            </div>
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
        <img src="/images/avatar/small/jenny.jpg">
      </template>
      <template #summary>
        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
        <div class="date">
          3 days ago
        </div>
      </template>
    </FeedEvent>
  </Feed>
<\/template>`
</script>

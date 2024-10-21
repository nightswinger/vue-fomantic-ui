<template>
  <DocSection label="Vertical Segment" :code="code">
    <template #description>
      A vertical segment formats content to be aligned as part of a vertical group
    </template>
    <template #example>
      <SuiSegment vertical>
        <p>Te eum doming eirmod, nominati pertinacia argumentum ad his.</p>
      </SuiSegment>
      <SuiSegment vertical>
        <p>Pellentesque habitant morbi tristique senectus.</p>
      </SuiSegment>
      <SuiSegment vertical>
        <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</p>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment vertical>
    <p>Te eum doming eirmod, nominati pertinacia argumentum ad his.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Pellentesque habitant morbi tristique senectus.</p>
  </SuiSegment>
  <SuiSegment vertical>
    <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</p>
  </SuiSegment>
</template>`
</script>

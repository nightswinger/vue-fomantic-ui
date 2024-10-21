<template>
  <DocSection label="Visible" :code="code">
    <template #description>
      A message can be set to visible to force itself to be shown.
    </template>
    <template #example>
      <Message
        visible
        content="You can always see me"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Message } from 'vue-fomantic-ui'

const code = `<template>
  <Message
    visible
    content="You can always see me"
  />
<\/template>`
</script>

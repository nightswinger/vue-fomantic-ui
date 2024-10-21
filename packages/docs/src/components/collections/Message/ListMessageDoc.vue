<template>
  <DocSection label="List Message" :code="code">
    <template #description>
      A message with a list
    </template>
    <template #example>
      <Message
        header="New Site Features"
        :list="[
          'You can now have cover images on blog pages',
          'Drafts will now auto-save while writing'
        ]"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Message } from 'vue-fomantic-ui'

const code = `<template>
  <Message
    header="New Site Features"
    :list="[
      'You can now have cover images on blog pages',
      'Drafts will now auto-save while writing'
    ]"
  />
<\/template>`
</script>

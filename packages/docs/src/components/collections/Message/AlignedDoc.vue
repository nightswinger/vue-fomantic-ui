<template>
  <DocSection label="Aligned" :code="code">
    <template #description>
      A message can be displayed center or right aligned
    </template>
    <template #example>
      <Message
        aligned="center"
        header="New Version is available!"
        content="When are you going to update?"
      />
      <Message
        aligned="right"
        header="New Version is available!"
        content="When are you going to update?"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Message } from 'vue-fomantic-ui'

const code = `<template>
  <Message
    aligned="center"
    hedaer="New Version is available!"
    content="When are you going to update?"
  />
  <Message
    aligned="right"
    hedaer="New Version is available!"
    content="When are you going to update?"
  />
<\/template>`
</script>

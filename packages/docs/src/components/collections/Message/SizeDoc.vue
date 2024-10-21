<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A message can have different sizes
    </template>
    <template #example>
      <Message size="mini" content="This is a mini message." />
      <Message size="tiny" content="This is a tiny message." />
      <Message size="small" content="This is a small message." />
      <Message size="large" content="This is a large message." />
      <Message size="big" content="This is a big message." />
      <Message size="huge" content="This is a huge message." />
      <Message size="massive" content="This is a massive message." />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Message } from 'vue-fomantic-ui'

const code = `<template>
  <Message size="mini" content="This is a mini message." />
  <Message size="tiny" content="This is a tiny message." />
  <Message size="small" content="This is a small message." />
  <Message size="large" content="This is a large message." />
  <Message size="big" content="This is a big message." />
  <Message size="huge" content="This is a huge message." />
  <Message size="massive" content="This is a massive message." />
<\/template>`
</script>

<template>
  <DocSection label="Label" :code="code">
    <template #description>
      A statistic can contain a label to help provide context for the presented value
    </template>
    <template #example>
      <Statistic value="2,204" label="Views" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Statistic } from 'vue-fomantic-ui'

const code = `<template>
  <Statistic value="2,204" label="Views" />
<\/template>`
</script>

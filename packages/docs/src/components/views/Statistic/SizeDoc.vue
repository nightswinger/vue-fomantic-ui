<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A statistic can vary in size
    </template>
    <template #example>
      <Statistic size="mini" value="2,204" label="Views" />
      <Statistic size="tiny" value="2,204" label="Views" />
      <Statistic size="small" value="2,204" label="Views" />
      <Statistic value="2,204" label="Views" />
      <Statistic size="large" value="2,204" label="Views" />
      <Statistic size="huge" value="2,204" label="Views" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Statistic } from 'vue-fomantic-ui'

const code = `<template>
  <Statistic size="mini" value="2,204" label="Views" />
  <Statistic size="tiny" value="2,204" label="Views" />
  <Statistic size="small" value="2,204" label="Views" />
  <Statistic value="2,204" label="Views" />
  <Statistic size="large" value="2,204" label="Views" />
  <Statistic size="huge" value="2,204" label="Views" />
<\/template>`
</script>

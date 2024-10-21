<template>
  <DocSection label="Statistic Group" :code="code">
    <template #description>
      A group of statistics
    </template>
    <template #example>
      <StatisticGroup>
        <Statistic value="22" label="Faves" />
        <Statistic value="31,200" label="Views" />
        <Statistic value="22" label="Members" />
      </StatisticGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Statistic, StatisticGroup } from 'vue-fomantic-ui'

const code = `<template>
  <StatisticGroup>
    <Statistic value="22" label="Faves" />
    <Statistic value="31,200" label="Views" />
    <Statistic value="22" label="Members" />
  </StatisticGroup>
<\/template>`
</script>

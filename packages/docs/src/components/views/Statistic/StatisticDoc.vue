<template>
  <DocSection label="Statistic" :code="code">
    <template #description>
      A statistic can display a value with a label above or below it.
    </template>
    <template #example>
      <Statistic value="5,550" label="Downloads" />
      <Statistic>
        <StatisticLabel>Views</StatisticLabel>
        <StatisticValue>40,509</StatisticValue>
      </Statistic>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Statistic, StatisticLabel, StatisticValue } from 'vue-fomantic-ui'

const code = `<template>
  <Statistic value="5,550" label="Downloads" />
  <Statistic>
    <StatisticLabel>Views</StatisticLabel>
    <StatisticValue>40,509</StatisticValue>
  </Statistic>
<\/template>`
</script>

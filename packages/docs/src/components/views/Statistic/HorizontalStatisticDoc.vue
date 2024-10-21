<template>
  <DocSection label="Horizontal Statistic" :code="code">
    <template #description>
      A statistic can present its measurement horizontally
    </template>
    <template #example>
      <Statistic horizontal>
        <StatisticLabel>Views</StatisticLabel>
        <StatisticValue>40,509</StatisticValue>
      </Statistic>
      <StatisticGroup horizontal>
        <Statistic value="2,204" label="Views" />
        <Statistic value="3,322" label="Downloads" />
        <Statistic value="22" label="Tasks" />
      </StatisticGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Statistic, StatisticLabel, StatisticValue, StatisticGroup } from 'vue-fomantic-ui'

const code = `<template>
  <Statistic horizontal>
    <StatisticLabel>Views</StatisticLabel>
    <StatisticValue>40,509</StatisticValue>
  </Statistic>
  <StatisticGroup horizontal>
    <Statistic value="2,204" label="Views" />
    <Statistic value="3,322" label="Downloads" />
    <Statistic value="22" label="Tasks" />
  </StatisticGroup>
<\/template>`
</script>

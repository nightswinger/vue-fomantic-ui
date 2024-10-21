<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      A statistic can be formatted to be different colors
    </template>
    <template #example>
      <Segment inverted>
        <StatisticGroup inverted>
          <Statistic color="red" value="27" label="Red" />
          <Statistic color="orange" value="8" label="Orange" />
          <Statistic color="yellow" value="28" label="Yellow" />
          <Statistic color="olive" value="7" label="Olive" />
          <Statistic color="green" value="14" label="Green" />
          <Statistic color="teal" value="82" label="Teal" />
          <Statistic color="blue" value="1" label="Blue" />
          <Statistic color="violet" value="22" label="Violet" />
          <Statistic color="purple" value="23" label="Purple" />
          <Statistic color="pink" value="15" label="Pink" />
          <Statistic color="brown" value="36" label="Brown" />
          <Statistic color="grey" value="49" label="Grey" />
        </StatisticGroup>
      </Segment>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Statistic, StatisticGroup, Segment } from 'vue-fomantic-ui'

const code = `<template>
  <Segment inverted>
    <StatisticGroup inverted>
      <Statistic color="red" value="27" label="Red" />
      <Statistic color="orange" value="8" label="Orange" />
      <Statistic color="yellow" value="28" label="Yellow" />
      <Statistic color="olive" value="7" label="Olive" />
      <Statistic color="green" value="14" label="Green" />
      <Statistic color="teal" value="82" label="Teal" />
      <Statistic color="blue" value="1" label="Blue" />
      <Statistic color="violet" value="22" label="Violet" />
      <Statistic color="purple" value="23" label="Purple" />
      <Statistic color="pink" value="15" label="Pink" />
      <Statistic color="brown" value="36" label="Brown" />
      <Statistic color="grey" value="49" label="Grey" />
    </StatisticGroup>
  </Segment>
<\/template>`
</script>

<template>
  <DocSection label="Evenly Divided" :code="code">
    <template #description>
      A statistic group can have its items divided evenly
    </template>
    <template #example>
      <StatisticGroup :widths="4">
        <Statistic value="22" label="Faves" />
        <Statistic>
          <StatisticValue text>
            Three<br>
            Thousand
          </StatisticValue>
          <StatisticLabel>Signups</StatisticLabel>
        </Statistic>
        <Statistic>
          <StatisticValue>
            <Icon name="plane" /> 5
          </StatisticValue>
          <StatisticLabel>Flights</StatisticLabel>
        </Statistic>
        <Statistic>
          <StatisticValue>
            <Image circular inline src="/vue-fomantic-ui/images/avatar/small/joe.jpg" />
            42
          </StatisticValue>
          <StatisticLabel>Team Members</StatisticLabel>
        </Statistic>
      </StatisticGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { StatisticGroup, Statistic, StatisticLabel, StatisticValue, Icon, Image } from 'vue-fomantic-ui'

const code = `<template>
  <StatisticGroup :widths="4">
    <Statistic value="22" label="Faves" />
    <Statistic>
      <StatisticValue text>
        Three<br>
        Thousand
      </StatisticValue>
      <StatisticLabel>Signups</StatisticLabel>
    </Statistic>
    <Statistic>
      <StatisticValue>
        <Icon name="plane" /> 5
      </StatisticValue>
      <StatisticLabel>Flights</StatisticLabel>
    </Statistic>
    <Statistic>
      <StatisticValue>
        <Image circular inline src="/vue-fomantic-ui/images/avatar/small/joe.jpg" />
        42
      </StatisticValue>
      <StatisticLabel>Team Members</StatisticLabel>
    </Statistic>
  </StatisticGroup>
<\/template>`
</script>

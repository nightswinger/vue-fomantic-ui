<template>
  <DocSection label="Value" :code="code">
    <template #description>
      A statistic can contain a numeric, icon, image, or text value
    </template>
    <template #example>
      <StatisticGroup>
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
  <StatisticGroup>
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
        <Image circular inline src="/images/avatar/small/joe.jpg" />
        42
      </StatisticValue>
      <StatisticLabel>Team Members</StatisticLabel>
    </Statistic>
  </StatisticGroup>
<\/template>`
</script>

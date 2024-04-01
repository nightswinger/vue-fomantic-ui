<template>
  <DocSection label="Inverted Color" :code="code">
    <template #description>
      These colors can also be inverted for improved contrast on dark backgrounds
    </template>
    <template #example>
      <Segment inverted>
        <Progress progress :percent="23" inverted color="red" />
        <Progress progress :percent="25" inverted color="orange" />
        <Progress progress :percent="64" inverted color="yellow" />
        <Progress progress :percent="24" inverted color="olive" />
        <Progress progress :percent="8" inverted color="green" />
        <Progress progress :percent="28" inverted color="teal" />
        <Progress progress :percent="41" inverted color="blue" />
        <Progress progress :percent="27" inverted color="violet" />
        <Progress progress :percent="26" inverted color="purple" />
        <Progress progress :percent="44" inverted color="pink" />
        <Progress progress :percent="38" inverted color="brown" />
        <Progress progress :percent="49" inverted color="grey" />
        <Progress progress :percent="46" inverted color="black" />
      </Segment>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Progress, Segment } from 'vue-fomantic-ui'

const code = `<template>
  <Segment inverted>
    <Progress progress :percent="23" inverted color="red" />
    <Progress progress :percent="25" inverted color="orange" />
    <Progress progress :percent="64" inverted color="yellow" />
    <Progress progress :percent="24" inverted color="olive" />
    <Progress progress :percent="8" inverted color="green" />
    <Progress progress :percent="28" inverted color="teal" />
    <Progress progress :percent="41" inverted color="blue" />
    <Progress progress :percent="27" inverted color="violet" />
    <Progress progress :percent="26" inverted color="purple" />
    <Progress progress :percent="44" inverted color="pink" />
    <Progress progress :percent="38" inverted color="brown" />
    <Progress progress :percent="49" inverted color="grey" />
    <Progress progress :percent="46" inverted color="black" />
  </Segment>
<\/template>`
</script>

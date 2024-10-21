<template>
  <DocSection label="Attached" :code="code">
    <template #description>
      A progress bar can show progress of an element
    </template>
    <template #example>
      <Segment>
        <Progress attached="top" :percent="value" />
        <p>La la la la</p>
        <Progress attached="bottom" :percent="value" />
      </Segment>
      <Button icon="plus" @click="value += 10" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Progress, Segment, Button } from 'vue-fomantic-ui'

const value = ref(10)

const code = `<template>
  <Segment>
    <Progress attached="top" :percent="value" />
    <p>La la la la</p>
    <Progress attached="bottom" :percent="value" />
  </Segment>
  <Button icon="plus" @click="value += 10" />
<\/template>`
</script>

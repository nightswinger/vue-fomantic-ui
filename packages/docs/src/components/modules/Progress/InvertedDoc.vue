<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      A progress bar can have its colors inverted
    </template>
    <template #example>
      <Segment inverted>
        <Progress inverted progress :percent="value" label="Uploading Files" />
        <Progress inverted success progress :percent="100" label="Success" />
        <Progress inverted warning progress :percent="100" label="Warning" />
        <Progress inverted error progress :percent="100" label="Error" />
      </Segment>
      <Button icon="plus" @click="value += 10" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue';
import { Progress, Segment, Button } from 'vue-fomantic-ui'

const value = ref(10)

const code = `<template>
  <Segment inverted>
    <Progress inverted progress :percent="value" label="Uploading Files" />
    <Progress inverted success progress :percent="100" label="Success" />
    <Progress inverted warning progress :percent="100" label="Warning" />
    <Progress inverted error progress :percent="100" label="Error" />
  </Segment>
  <Button icon="plus" @click="value.value += 10" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Progress, Segment, Button } from 'vue-fomantic-ui'

const value = ref(10)
<\/script>`
</script>

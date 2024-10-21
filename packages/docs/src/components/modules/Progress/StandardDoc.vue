<template>
  <DocSection label="Standard" :code="code">
    <template #description>
      A standard progress bar
    </template>
    <template #example>
      <Progress progress :percent="value" label="Uploading Files" />
      <Button icon="minus" @click="value -= 10" />
      <Button icon="plus" @click="value += 10" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'

import { Progress, Button } from 'vue-fomantic-ui'

const value = ref(30)

const code = `<template>
  <Progress progress :percent="value" label="Uploading Files" />
  <Button icon="minus" @click="value -= 10" />
  <Button icon="plus" @click="value += 10" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Progress, Button } from 'vue-fomantic-ui'

const value = ref(30)
<\/script>`
</script>

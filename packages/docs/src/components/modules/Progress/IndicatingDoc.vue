<template>
  <DocSection label="Indicating" :code="code">
    <template #description>
      An indicating progress bar visually indicates the current level of progress of a task
    </template>
    <template #example>
      <Progress indicating progress :percent="value" :label="`${value}% Funded`" />
      <Button icon="minus" @click="value -= 10" />
      <Button icon="plus" @click="value += 10" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'

import { Progress, Button } from 'vue-fomantic-ui'

const value = ref(10)

const code = `<template>
  <Progress indicating progress :percent="value" :label="\`\${value}% Funded\`" />
  <Button icon="minus" @click="value -= 10" />
  <Button icon="plus" @click="value += 10" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Progress, Button } from 'vue-fomantic-ui'

const value = ref(10)
<\/script>`
</script>

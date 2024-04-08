<template>
  <DocSection label="Inline Calendar" :code="code">
    <template #description>
      An inline calendar isn't shown in a popup
    </template>
    <template #example>
      <Calendar v-model="date" inline />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Calendar } from 'vue-fomantic-ui'

const date = ref()

const code = `<template>
  <Calendar v-model="date" inline />
<\/template>

<script setup>
import { ref } from 'vue'
import { Calendar } from 'vue-fomantic-ui'

const date = ref()
<\/script>`
</script>

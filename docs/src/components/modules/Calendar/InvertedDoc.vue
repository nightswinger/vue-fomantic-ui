<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      A calendar can have its colors inverted
    </template>
    <template #example>
      <Calendar v-model="date" inverted placeholder="Date/Time" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Calendar } from 'vue-fomantic-ui'

const date = ref()

const code = `<template>
  <Calendar v-model="date" inverted placeholder="Date/Time" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Calendar } from 'vue-fomantic-ui'

const date = ref()
<\/script>`
</script>

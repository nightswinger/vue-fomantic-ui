<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A calendar can have different sizes
    </template>
    <template #example>
      <Calendar v-model="date" size="big" placeholder="Date/Time" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Calendar } from 'vue-fomantic-ui'

const date = ref()

const code = `<template>
  <Calendar v-model="date" size="big" placeholder="Date/Time" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Calendar } from 'vue-fomantic-ui'

const date = ref()
<\/script>`
</script>

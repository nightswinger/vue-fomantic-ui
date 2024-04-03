<template>
  <DocSection label="Toggle" :code="code">
    <template #description>
      A checkbox can toggle
    </template>
    <template #example>
      <Checkbox toggle v-model="checked" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Checkbox } from 'vue-fomantic-ui'

const checked = ref(false)

const code = `<template>
  <Checkbox toggle v-model="checked" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Checkbox } from 'vue-fomantic-ui'

const checked = ref(false)
<\/script>`
</script>

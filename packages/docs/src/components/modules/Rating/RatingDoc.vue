<template>
  <DocSection label="Rating" :code="code">
    <template #description>
      A Basic rating
    </template>
    <template #example>
      <Rating v-model="value" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Rating } from 'vue-fomantic-ui'

const value = ref(0)

const code = `<template>
  <Rating v-model="value" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Rating } from 'vue-fomantic-ui'

const value = ref(0)
<\/script>`
</script>

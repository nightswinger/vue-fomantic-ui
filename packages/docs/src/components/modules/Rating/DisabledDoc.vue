<template>
  <DocSection label="Disabled" :code="code">
    <template #description>
      A rating can be started in non-interactive mode by adding a disabled class
    </template>
    <template #example>
      <Rating disabled v-model="value" :maxRating="5" color="yellow" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Rating } from 'vue-fomantic-ui'

const value = ref(3)

const code = `<template>
  <Rating disabled v-model="value" :maxRating="5" color="yellow" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Rating } from 'vue-fomantic-ui'

const value = ref(3)
<\/script>`
</script>

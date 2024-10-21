<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A rating can vary in size
    </template>
    <template #example>
      <div
        v-for="size in sizes"
        :key="size"
      >
        <Rating :size="size" :defaultRating="3" :maxRating="4" color="yellow" />
        <Divider hidden />
      </div>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Rating, Divider } from 'vue-fomantic-ui'

const sizes = ref([
  'mini',
  'tiny',
  'small',
  'medium',
  'large',
  'huge',
  'massive',
])

const code = `<template>
  <div
    v-for="size in sizes"
    :key="size"
  >
    <Rating :size="size" :defaultRating="3" :maxRating="4" color="yellow" />
    <Divider hidden />
  </div>
<\/template>

<script setup>
import { ref } from 'vue'
import { Rating, Divider } from 'vue-fomantic-ui'

const sizes = ref([
  'mini',
  'tiny',
  'small',
  'medium',
  'large',
  'huge',
  'massive',
])
<\/script>`
</script>

<template>
  <DocSection label="Color" :code="code">
    <template #description>
      You can specify any color of the FUI color palette
    </template>
    <template #example>
      <div
        v-for="(color, i) in colors"
        :key="i"
      >
        <Rating
          :defaultRating="i"
          :maxRating="colors.length"
          :color="color"
        />
      </div>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Rating } from 'vue-fomantic-ui'

const colors = ref([
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
])

const code = `<template>
  <div
    v-for="(color, i) in colors"
    :key="i"
  >
    <Rating
      :defaultRating="i"
      :maxRating="colors.length"
      :color="color"
    />
  </div>
<\/template>

<script setup>
import { ref } from 'vue'
import { Rating } from 'vue-fomantic-ui'

const colors = ref([
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
])
<\/script>`
</script>

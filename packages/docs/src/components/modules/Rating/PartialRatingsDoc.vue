<template>
  <DocSection label="Partial Ratings" :code="code">
    <template #description>
      You can use decimal values for showing partially filled ratings
    </template>
    <template #example>
      <div
        v-for="rating in ratings"
        :key="rating.color"
      >
        <Rating
          :defaultRating="rating.value"
          :maxRating="5"
          :color="rating.color"
        />
      </div>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Rating } from 'vue-fomantic-ui'

const ratings = ref([
  { color: 'black', value: 0.5 },
  { color: 'pink', value: 1.25 },
  { color: 'red', value: 1.775 },
  { color: 'yellow', value: 2.5 },
  { color: 'green', value: 3.225 },
  { color: 'purple', value: 3.65 },
  { color: 'blue', value: 4.375 },
  { color: 'brown', value: 4.75 },
])

const code = `<template>
  <div
    v-for="rating in ratings"
    :key="rating.color"
  >
    <Rating
      :defaultRating="rating.value"
      :maxRating="5"
      :color="rating.color"
    />
  </div>
<\/template>

<script setup>
import { ref } from 'vue'
import { Rating } from 'vue-fomantic-ui'

const ratings = ref([
  { color: 'black', value: 0.5 },
  { color: 'pink', value: 1.25 },
  { color: 'red', value: 1.775 },
  { color: 'yellow', value: 2.5 },
  { color: 'green', value: 3.225 },
  { color: 'purple', value: 3.65 },
  { color: 'blue', value: 4.375 },
  { color: 'brown', value: 4.75 },
])
<\/script>`
</script>

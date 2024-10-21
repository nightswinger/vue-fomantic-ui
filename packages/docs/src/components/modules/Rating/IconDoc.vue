<template>
  <DocSection label="Icon" :code="code">
    <template #description>
      You can use any available icon as rating indicator
    </template>
    <template #example>
      <div
        v-for="rating in ratings"
        :key="rating.icon"
      >
        <Rating
          :defaultRating="2"
          :maxRating="4"
          :icon="rating.icon"
          :color="rating.color"
        />
        <Divider hidden />
      </div>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Rating, Divider } from 'vue-fomantic-ui'

const ratings = ref([
  { color: 'yellow' },
  { icon: 'heart', color: 'red' },
  { icon: 'female', color: 'purple' },
  { icon: 'male', color: 'blue' },
  { icon: 'cloud', color: 'grey' },
  { icon: 'cat', color: 'pink' },
  { icon: 'circle', color: 'orange' },
])

const code = `<template>
  <div
    v-for="rating in ratings"
    :key="rating.icon"
  >
    <Rating
      :defaultRating="2"
      :maxRating="4"
      :icon="rating.icon"
      :color="rating.color"
    />
    <Divider hidden />
  </div>
<\/template>

<script setup>
import { ref } from 'vue'
import { Rating, Divider } from 'vue-fomantic-ui'

const ratings = ref([
  { color: 'yellow' },
  { icon: 'heart', color: 'red' },
  { icon: 'female', color: 'purple' },
  { icon: 'male', color: 'blue' },
  { icon: 'cloud', color: 'grey' },
  { icon: 'cat', color: 'pink' },
  { icon: 'circle', color: 'orange' },
])
<\/script>`
</script>

<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      A slider can be inverted
    </template>
    <template #example>
      <Segment inverted>
        <Slider v-model="value" inverted />
      </Segment>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Slider, Segment } from 'vue-fomantic-ui'

const value = ref(8)

const code = `<template>
  <Segment inverted>
    <Slider v-model="value" inverted />
  </Segment>
<\/template>

<script setup>
import { ref } from 'vue'
import { Slider, Segment } from 'vue-fomantic-ui'

const value = ref(8)
<\/script>`
</script>

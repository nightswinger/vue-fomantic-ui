<template>
  <DocSection label="Ad" :code="code">
    <template #description>
      A standard ad
    </template>
    <template #example>
      <Advertisement unit="medium rectangle">
        <img src="/images/wireframe/image.png" />
      </Advertisement>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { Advertisement } from 'vue-fomantic-ui'

const code = `<template>
  <Advertisement unit="medium rectangle">
    <img src="/images/wireframe/image.png" />
  </Advertisement>
<\/template>`
</script>

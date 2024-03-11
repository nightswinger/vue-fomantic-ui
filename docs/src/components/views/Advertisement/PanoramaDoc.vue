<template>
  <DocSection label="Panorama" :code="code">
    <template #description>
      An ad can use panorama ad unit size
    </template>
    <template #example>
      <Advertisement unit="panorama" test="Panorama" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Advertisement } from 'vue-fomantic-ui'

const code = `<template>
  <Advertisement unit="panorama" test="Panorama" />
<\/template>`
</script>

<template>
  <DocSection label="Icon Buttons" :code="code">
    <template #description>
      Groups can be formatted as labeled icons
    </template>
    <template #example>
      <SuiButtonGroup vertical labeled icon>
        <SuiButton icon="pause" content="Pause" />
        <SuiButton icon="play" content="Play" />
        <SuiButton icon="shuffle" content="Shuffle" />
      </SuiButtonGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton, SuiButtonGroup } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButtonGroup vertical labeled icon>
    <SuiButton icon="pause" content="Pause" />
    <SuiButton icon="play" content="Play" />
    <SuiButton icon="shuffle" content="Shuffle" />
  </SuiButtonGroup>
<\/template>`
</script>

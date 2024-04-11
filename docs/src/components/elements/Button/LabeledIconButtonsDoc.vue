<template>
  <DocSection label="Labeled Icon Buttons" :code="code">
    <template #description>
      Groups can be formatted as labeled icons
    </template>
    <template #example>
      <ButtonGroup vertical labeled icon>
        <Button icon="pause" content="Pause" />
        <Button icon="play" content="Play" />
        <Button icon="shuffle" content="Shuffle" />
      </ButtonGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Button, ButtonGroup } from 'vue-fomantic-ui'

const code = `<template>
  <ButtonGroup vertical labeled icon>
    <Button icon="pause" content="Pause" />
    <Button icon="play" content="Play" />
    <Button icon="shuffle" content="Shuffle" />
  </ButtonGroup>
<\/template>`
</script>

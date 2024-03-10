<template>
  <DocSection label="Emphasis" :code="code">
    <template #description>
      A segment can be formatted to appear more or less noticeable
    </template>
    <template #example>
      <SuiSegment>
        <p>I'm here to tell you something, and you will probably read me first.</p>
      </SuiSegment>
      <SuiSegment secondary>
        <p>I am pretty noticeable but you might check out other content before you look at me.</p>
      </SuiSegment>
      <SuiSegment tertiary>
        <p>If you notice me you must be looking very hard.</p>
      </SuiSegment>
      <SuiDivider />
      <SuiSegment inverted>
        <p>I'm here to tell you something, and you will probably read me first.</p>
      </SuiSegment>
      <SuiSegment secondary inverted>
        <p>I am pretty noticeable but you might check out other content before you look at me.</p>
      </SuiSegment>
      <SuiSegment tertiary inverted>
        <p>If you notice me you must be looking very hard.</p>
      </SuiSegment>
      <SuiDivider />
      <SuiSegment inverted color="red">
        <p>I'm here to tell you something, and you will probably read me first.</p>
      </SuiSegment>
      <SuiSegment secondary inverted color="red">
        <p>I am pretty noticeable but you might check out other content before you look at me.</p>
      </SuiSegment>
      <SuiSegment tertiary inverted color="red">
        <p>If you notice me you must be looking very hard.</p>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiSegment, SuiDivider } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </SuiSegment>
  <SuiSegment secondary>
    <p>I am pretty noticeable but you might check out other content before you look at me.</p>
  </SuiSegment>
  <SuiSegment tertiary>
    <p>If you notice me you must be looking very hard.</p>
  </SuiSegment>
  <SuiDivider />
  <SuiSegment inverted>
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </SuiSegment>
  <SuiSegment secondary inverted>
    <p>I am pretty noticeable but you might check out other content before you look at me.</p>
  </SuiSegment>
  <SuiSegment tertiary inverted>
    <p>If you notice me you must be looking very hard.</p>
  </SuiSegment>
  <SuiDivider />
  <SuiSegment inverted color="red">
    <p>I'm here to tell you something, and you will probably read me first.</p>
  </SuiSegment>
  <SuiSegment secondary inverted color="red">
    <p>I am pretty noticeable but you might check out other content before you look at me.</p>
  </SuiSegment>
  <SuiSegment tertiary inverted color="red">
    <p>If you notice me you must be looking very hard.</p>
  </SuiSegment>
</template>`
</script>

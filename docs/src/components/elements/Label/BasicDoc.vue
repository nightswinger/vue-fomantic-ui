<template>
  <DocSection label="Basic" :code="code">
    <template #description>
      A label can reduce its complexity
    </template>
    <template #example>
      <SuiLabel as="a" basic>Basic</SuiLabel>
      <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
      <SuiLabel as="a" basic image>
        <img src="/images/avatar/small/elliot.jpg" />
        Elliot
      </SuiLabel>
      <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
      <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLabel as="a" basic>Basic</SuiLabel>
  <SuiLabel as="a" basic pointing>Pointing</SuiLabel>
  <SuiLabel as="a" basic image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
  </SuiLabel>
  <SuiLabel as="a" basic pointing color="red">Red Pointing</SuiLabel>
  <SuiLabel as="a" basic color="blue">Blue</SuiLabel>
</template>`
</script>

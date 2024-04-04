<template>
  <DocSection label="Secondary" :code="code">
    <template #description>
      A tab can ajust its appearance to de-emphasize its contents
    </template>
    <template #example>
      <Tab secondary>
        <TabPanel header="First">Content A</TabPanel>
        <TabPanel header="Second">Content B</TabPanel>
        <TabPanel header="Third">Content C</TabPanel>
      </Tab>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Tab, TabPanel } from 'vue-fomantic-ui'

const code = `<template>
  <Tab secondary>
    <TabPanel header="First">Content A</TabPanel>
    <TabPanel header="Second">Content B</TabPanel>
    <TabPanel header="Third">Content C</TabPanel>
  </Tab>
<\/template>`
</script>

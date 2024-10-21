<template>
  <DocSection label="Text" :code="code">
    <template #description>
      A tab can be formatted for text content 
    </template>
    <template #example>
      <Tab text>
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
  <Tab text>
    <TabPanel header="First">Content A</TabPanel>
    <TabPanel header="Second">Content B</TabPanel>
    <TabPanel header="Third">Content C</TabPanel>
  </Tab>
<\/template>`
</script>

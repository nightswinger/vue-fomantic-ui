<template>
  <DocSection label="Link" :code="code">
    <template #description>
      A section may be linkable or contain a link
    </template>
    <template #example>
      <SuiBreadcrumb>
        <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
        <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
        <SuiBreadcrumbSection active>Search for: <a href="#">paper towels</a></SuiBreadcrumbSection>
      </SuiBreadcrumb>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiBreadcrumb,
  SuiBreadcrumbDivider,
  SuiBreadcrumbSection,
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiBreadcrumb>
    <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Search for: <a href="#">paper towels</a></SuiBreadcrumbSection>
  </SuiBreadcrumb>
<\/template>`
</script>

<template>
  <DocSection label="Section" :code="code">
    <template #description>
      A breadcrumb can contain sections that can either be formatted as a link or text
    </template>
    <template #example>
      <SuiBreadcrumb>
        <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
        <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
        <SuiBreadcrumbSection active>Search</SuiBreadcrumbSection>
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
    <SuiBreadcrumbSection active>Search</SuiBreadcrumbSection>
  </SuiBreadcrumb>
<\/template>`
</script>

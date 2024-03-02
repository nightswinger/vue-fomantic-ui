<template>
  <DocSection label="Active" :code="code">
    <template #description>
      A section can be active
    </template>
    <template #example>
      <SuiBreadcrumb>
        <SuiBreadcrumbSection link>Products</SuiBreadcrumbSection>
        <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
        <SuiBreadcrumbSection active>Paper Towels</SuiBreadcrumbSection>
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
    <SuiBreadcrumbSection link>Products</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Paper Towels</SuiBreadcrumbSection>
  </SuiBreadcrumb>
<\/template>`
</script>

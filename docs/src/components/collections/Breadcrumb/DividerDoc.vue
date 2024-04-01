<template>
  <DocSection label="Divider" :code="code">
    <template #description>
      A breadcrumb can contain a divider to show the relationship between sections, this can be formatted as an icon or text.
    </template>
    <template #example>
      <SuiBreadcrumb>
        <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
        <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
        <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
        <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
        <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
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
    <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
    <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
    <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
  </SuiBreadcrumb>
<\/template>`
</script>

<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      A breadcrumb can be inverted
    </template>
    <template #example>
      <SuiSegment inverted>
        <SuiBreadcrumb inverted>
          <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
          <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
          <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
          <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
          <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
        </SuiBreadcrumb>
        <br>
        <SuiBreadcrumb inverted>
          <SuiBreadcrumbSection>Home</SuiBreadcrumbSection>
          <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
          <SuiBreadcrumbSection>Registration</SuiBreadcrumbSection>
          <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
          <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
        </SuiBreadcrumb>
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiBreadcrumb,
  SuiBreadcrumbDivider,
  SuiBreadcrumbSection,
  SuiSegment,
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment inverted>
    <SuiBreadcrumb inverted>
      <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
    </SuiBreadcrumb>
    <br>
    <SuiBreadcrumb inverted>
      <SuiBreadcrumbSection>Home</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection>Registration</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
    </SuiBreadcrumb>
  </SuiSegment>
<\/template>`
</script>

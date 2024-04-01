<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A breadcrumb can vary in size
    </template>
    <template #example>
      <template v-for="size in sizes" :key="size">
        <SuiBreadcrumb :size="size">
          <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
          <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
          <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
          <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
          <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
        </SuiBreadcrumb>
        <SuiDivider hidden />
      </template>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiBreadcrumb,
  SuiBreadcrumbDivider,
  SuiBreadcrumbSection,
  SuiDivider,
} from 'vue-fomantic-ui'

const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

const code = `<template>
  <template v-for="size in ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']" :key="size">
    <SuiBreadcrumb :size="size">
      <SuiBreadcrumbSection link>Home</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection link>Registration</SuiBreadcrumbSection>
      <SuiBreadcrumbDivider> / </SuiBreadcrumbDivider>
      <SuiBreadcrumbSection active>Personal Information</SuiBreadcrumbSection>
    </SuiBreadcrumb>
    <SuiDivider hidden />
  </template>
<\/template>`
</script>

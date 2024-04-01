<template>
  <DocSection label="Breadcrumb" :code="code">
    <template #description>
      A standard breadcrumb
    </template>
    <template #example>
      <SuiBreadcrumb
        :sections="[
          { content: 'Home', link: true },
          { content: 'Store', link: true },
          { content: 'T-Shirt', active: true }
        ]"
        icon="right angle"
      />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiBreadcrumb } from 'vue-fomantic-ui'

const code = `<template>
  <SuiBreadcrumb
    :sections="[
      { content: 'Home', link: true },
      { content: 'Store', link: true },
      { content: 'T-Shirt', active: true }
    ]"
    icon="right angle"
  />
<\/template>`
</script>

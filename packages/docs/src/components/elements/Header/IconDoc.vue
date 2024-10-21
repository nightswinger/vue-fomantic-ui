<template>
  <DocSection label="Icon" :code="code">
    <template #description>
      A header may contain an Icon
    </template>
    <template #example>
      <SuiHeader as="h2">
        <SuiIcon name="plug" />
        <SuiHeaderContent>
          Uptime Guarantee
        </SuiHeaderContent>
      </SuiHeader>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiHeader,
  SuiHeaderContent,
  SuiIcon,
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiHeader as="h2">
    <SuiIcon name="plug" />
    <SuiHeaderContent>
      Uptime Guarantee
    </SuiHeaderContent>
  </SuiHeader>
</template>`
</script>

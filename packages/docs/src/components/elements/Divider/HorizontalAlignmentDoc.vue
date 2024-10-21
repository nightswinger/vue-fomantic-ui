<template>
  <DocSection label="Horizontal Alignment" :code="code">
    <template #description>
      A horizontal divider can be aligned
    </template>
    <template #example>
      <SuiDivider horizontal textAlign="left">
        <SuiIcon name="left align" />
        Left Aligned
      </SuiDivider>
      <SuiDivider horizontal textAlign="center">
        <SuiIcon name="center align" />
        Center Aligned
      </SuiDivider>
      <SuiDivider horizontal textAlign="right">
        <SuiIcon name="right align" />
        Right Aligned
      </SuiDivider>
    </template>
  </DocSection>
</template>
  
<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiDivider,
  SuiIcon,
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiDivider horizontal textAlign="left">
    <SuiIcon name="left align" />
    Left Aligned
  </SuiDivider>
  <SuiDivider horizontal textAlign="center">
    <SuiIcon name="center align" />
    Center Aligned
  </SuiDivider>
  <SuiDivider horizontal textAlign="right">
    <SuiIcon name="right align" />
    Right Aligned
  </SuiDivider>
</template>`
</script>

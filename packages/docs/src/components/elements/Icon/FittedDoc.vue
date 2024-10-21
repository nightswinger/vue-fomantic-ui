<template>
  <DocSection label="Fitted" :code="code">
    <template #description>
      An icon can be fitted, without any space to the left or right of it.
    </template>
    <template #example>
      <div>
        This icon
        <SuiIcon name="help" fitted />
        is fitted.
        <br />
        This icon
        <SuiIcon name="help" />
        is not fitted.
      </div>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <div>
    This icon
    <SuiIcon name="help" fitted />
    is fitted.
    <br />
    This icon
    <SuiIcon name="help" />
    is not fitted.
  </div>
</template>`
</script>

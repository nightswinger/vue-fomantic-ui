<template>
  <DocSection label="Field" :code="code">
    <template #description>
      A field is a form element containing a label and an input
    </template>
    <template #example>
      <SuiForm>
        <SuiFormField
          label="User Input"
        />
      </SuiForm>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiForm, SuiFormField } from 'vue-fomantic-ui'

const code = `<template>
  <SuiForm>
    <SuiFormField
      label="User Input"
    />
  </SuiForm>
<\/template>`
</script>

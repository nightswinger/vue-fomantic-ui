<template>
  <DocSection label="Fields" :code="code">
    <template #description>
      A set of fields can appear grouped together
    </template>
    <template #example>
      <SuiForm>
        <SuiFormGroup>
          <SuiFormField label="First Name" />
          <SuiFormField label="Middle Name" />
          <SuiFormField label="Last Name" />
        </SuiFormGroup>
      </SuiForm>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiForm, SuiFormGroup, SuiFormField } from 'vue-fomantic-ui'

const code = `<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField label="First Name" />
      <SuiFormField label="Middle Name" />
      <SuiFormField label="Last Name" />
    </SuiFormGroup>
  </SuiForm>
<\/template>`
</script>

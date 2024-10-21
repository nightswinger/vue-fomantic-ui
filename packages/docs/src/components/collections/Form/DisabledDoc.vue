<template>
  <DocSection label="Disabled" :code="code">
    <template #description>
      Individual fields may be disabled
    </template>
    <template #example>
      <SuiForm>
        <SuiFormGroup>
          <SuiFormField disabled label="First name" placeholder="Read only" />
          <SuiFormField disabled label="Last name" placeholder="Disabled" />
        </SuiFormGroup>
      </SuiForm>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiForm, SuiFormField, SuiFormGroup } from 'vue-fomantic-ui'

const code = `<template>
  <SuiForm>
    <SuiFormGroup>
      <SuiFormField disabled label="First name" placeholder="Read only" />
      <SuiFormField disabled label="Last name" placeholder="Disabled" />
    </SuiFormGroup>
  </SuiForm>
<\/template>`
</script>

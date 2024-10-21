<template>
  <DocSection label="Form" :code="code">
    <template #description>
      A Form
    </template>
    <template #example>
      <SuiForm>
        <SuiFormField
          label="First Name"
          placeholder="First Name"
        />
        <SuiFormField
          label="Last Name"
          placeholder="Last Name"
        />
        <SuiFormField>
          <SuiCheckbox label="I agree to the Terms and Conditions" />
        </SuiFormField>
        <SuiButton type="submit">Submit</SuiButton>
      </SuiForm>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiForm, SuiFormField, SuiCheckbox, SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiForm>
    <SuiFormField
      label="First Name"
      placeholder="First Name"
    />
    <SuiFormField
      label="Last Name"
      placeholder="Last Name"
    />
    <SuiFormField>
      <SuiCheckbox label="I agree to the Terms and Conditions" />
    </SuiFormField>
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
<\/template>`
</script>

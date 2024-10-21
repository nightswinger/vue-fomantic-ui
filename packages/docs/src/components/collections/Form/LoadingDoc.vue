<template>
  <DocSection label="Loading" :code="code">
    <template #description>
      If a form is in loading state, it will automatically show a loading indicator.
    </template>
    <template #example>
      <SuiForm loading>
        <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
        <SuiButton type="submit">Submit</SuiButton>
      </SuiForm>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiForm, SuiFormField, SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiForm loading>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
<\/template>`
</script>

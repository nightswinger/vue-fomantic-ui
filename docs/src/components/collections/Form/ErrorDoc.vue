<template>
  <DocSection label="Error" :code="code">
    <template #description>
      If a form is in an error state, it will automatically show any error message blocks.
    </template>
    <template #example>
      <SuiForm error>
        <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
        <SuiMessage
          error
          header='Action Forbidden'
          content='You can only sign up for an account once with a given e-mail address.'
        />
        <SuiButton type="submit">Submit</SuiButton>
      </SuiForm>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiForm, SuiFormField, SuiButton, SuiMessage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiForm error>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
<\/template>`
</script>

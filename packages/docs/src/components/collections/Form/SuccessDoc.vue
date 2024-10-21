<template>
  <DocSection label="Success" :code="code">
    <template #description>
      If a form is in an success state, it will automatically show any success message blocks.
    </template>
    <template #example>
      <SuiForm success>
        <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
        <SuiMessage
          success
          header='Form Completed'
          content="You're all signed up for the newsletter"
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
  <SuiForm success>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
<\/template>`
</script>

<template>
  <DocSection label="Warning" :code="code">
    <template #description>
      If a form is in warning state, it will automatically show any warning message block.
    </template>
    <template #example>
      <SuiForm warning>
        <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
        <SuiMessage
          warning
          header='Could you check something!'
          content='That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
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
  <SuiForm warning>
    <SuiFormField label="E-mail" type="email" placeholder="joe@schome.com" />
    <SuiMessage
      warning
      header='Could you check something!'
      content='That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
    />
    <SuiButton type="submit">Submit</SuiButton>
  </SuiForm>
<\/template>`
</script>

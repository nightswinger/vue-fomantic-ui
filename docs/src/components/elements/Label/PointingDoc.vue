<template>
  <DocSection label="Pointing" :code="code">
    <template #description>
      A label can point to content next to it
    </template>
    <template #example>
      <SuiForm fluid>
        <SuiFormField>
          <input type="text" placeholder="First Name" />
          <SuiLabel pointing>Please enter a value</SuiLabel>
        </SuiFormField>
        <SuiDivider />
        <SuiFormField>
          <SuiLabel pointing="below">Please enter a value</SuiLabel>
          <input type="text" />
        </SuiFormField>
        <SuiDivider />
        <SuiFormField inline>
          <input type="text" placeholder="Username" />
          <SuiLabel pointing="left" color="red" basic>That name is taken!</SuiLabel>
        </SuiFormField>
        <SuiDivider />
        <SuiFormField inline>
          <SuiLabel pointing="right" color="red" basic>Your password must be 6 characters or more</SuiLabel>
          <input type="password" />
        </SuiFormField>
      </SuiForm>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel, SuiForm, SuiFormField, SuiDivider } from 'vue-fomantic-ui'

const code = `<template>
  <SuiForm fluid>
    <SuiFormField>
      <input type="text" placeholder="First Name" />
      <SuiLabel pointing>Please enter a value</SuiLabel>
    </SuiFormField>
    <SuiDivider />
    <SuiFormField>
      <SuiLabel pointing="below">Please enter a value</SuiLabel>
      <input type="text" />
    </SuiFormField>
    <SuiDivider />
    <SuiFormField inline>
      <input type="text" placeholder="Username" />
      <SuiLabel pointing="left" color="red" basic>That name is taken!</SuiLabel>
    </SuiFormField>
    <SuiDivider />
    <SuiFormField inline>
      <SuiLabel pointing="right" color="red" basic>Your password must be 6 characters or more</SuiLabel>
      <input type="password" />
    </SuiFormField>
  </SuiForm>
</template>`
</script>

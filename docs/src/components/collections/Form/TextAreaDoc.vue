<template>
  <DocSection label="TextArea" :code="code">
    <template #description>
      A textarea can be used to allow for extended user input.
    </template>
    <template #example>
      <SuiForm>
        <SuiFormTextarea label="Text" />
        <SuiFormTextarea label="Short Text" :rows="2" />
      </SuiForm>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiForm, SuiFormTextarea } from 'vue-fomantic-ui'

const code = `<template>
  <SuiForm>
    <SuiFormTextarea label="Text" />
    <SuiFormTextarea label="Short Text" :rows="2" />
  </SuiForm>
<\/template>`
</script>

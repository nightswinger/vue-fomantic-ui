<template>
  <DocSection label="Fluid" :code="code">
    <template #description>
      A fluid container has no maximum width
    </template>
    <template #example>
      <SuiContainer fluid>
        <SuiHeader as="h2">Dogs Roles with Humans</SuiHeader>
        <p>
          Domestic dogs inherited complex behaviors, such as bite inhibition, from
          their wolf ancestors, which would have been pack hunters with complex
          body language. These sophisticated forms of social cognition and
          communication may account for their trainability, playfulness, and
          ability to fit into human households and social situations, and these
          attributes have given dogs a relationship with humans that has enabled
          them to become one of the most successful species on the planet today.
        </p>
      </SuiContainer>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiContainer, SuiHeader } from 'vue-fomantic-ui'

const code = `<template>
  <SuiContainer fluid>
    <SuiHeader as="h2">Dogs Roles with Humans</SuiHeader>
    <p>
      Domestic dogs inherited complex behaviors, such as bite inhibition, from
      their wolf ancestors, which would have been pack hunters with complex
      body language. These sophisticated forms of social cognition and
      communication may account for their trainability, playfulness, and
      ability to fit into human households and social situations, and these
      attributes have given dogs a relationship with humans that has enabled
      them to become one of the most successful species on the planet today.
    </p>
  </SuiContainer>
<\/template>`
</script>

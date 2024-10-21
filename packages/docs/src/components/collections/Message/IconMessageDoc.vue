<template>
  <DocSection label="Icon Message" :code="code">
    <template #description>
      A message can contain an icon.
    </template>
    <template #example>
      <Message
        icon="inbox"
        header="Have you heard about our mailing list?"
        content="Get the best news in your e-mail every day."
      />
      <Message
        icon
        header="Just one second"
        content="We're fetching that content for you.">
        <Icon name="notched circle loading" />
      </Message>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Message, Icon } from 'vue-fomantic-ui'

const code = `<template>
  <Message
    icon="inbox"
    header="Have you heard about our mailing list?"
    content="Get the best news in your e-mail every day."
  />
  <Message
    icon
    header="Just one second"
    content="We're fetching that content for you.">
    <Icon name="notched circle loading" />
  </Message>
<\/template>`
</script>

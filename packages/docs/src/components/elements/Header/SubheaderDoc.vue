<template>
  <DocSection label="Subheader" :code="code">
    <template #description>
      Headers may contain subheaders
    </template>
    <template #example>
      <SuiHeader as="h2">
        Account Settings
        <SuiHeaderSubheader>
          Manage your account settings and set e-mail preferences.
        </SuiHeaderSubheader>
      </SuiHeader>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiHeader,
  SuiHeaderSubheader,
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiHeader as="h2">
    Account Settings
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
</template>`
</script>

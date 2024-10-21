<template>
  <DocSection label="Icon Headers" :code="code">
    <template #description>
      A header can be formatted to emphasize an icon
    </template>
    <template #example>
      <SuiHeader icon>
        <SuiIcon name="settings" />
        <SuiHeaderContent>
          Account Settings
        </SuiHeaderContent>
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
  SuiHeaderContent,
  SuiHeaderSubheader,
  SuiIcon
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiHeader icon>
    <SuiIcon name="settings" />
    <SuiHeaderContent>
      Account Settings
    </SuiHeaderContent>
    <SuiHeaderSubheader>
      Manage your account settings and set e-mail preferences.
    </SuiHeaderSubheader>
  </SuiHeader>
<\/template>`
</script>

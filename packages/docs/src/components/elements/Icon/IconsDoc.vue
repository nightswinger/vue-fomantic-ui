<template>
  <DocSection label="Icons" :code="code">
    <template #description>
      Several icons can be used together as a group
    </template>
    <template #example>
      <SuiIconGroup size="huge">
        <SuiIcon name="circle outline" size="big" />
        <SuiIcon name="user" />
      </SuiIconGroup>
      <SuiIconGroup size="huge">
        <SuiIcon name="dont" size="big" color="red" />
        <SuiIcon name="user" color="black" />
      </SuiIconGroup>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiIconGroup, SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiIconGroup size="huge">
    <SuiIcon name="circle outline" size="big" />
    <SuiIcon name="user" />
  </SuiIconGroup>
  <SuiIconGroup size="huge">
    <SuiIcon name="dont" size="big" color="red" />
    <SuiIcon name="user" color="black" />
  </SuiIconGroup>
</template>`
</script>

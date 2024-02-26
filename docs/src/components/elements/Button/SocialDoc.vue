<template>
  <DocSection label="Social" :code="code">
    <template #description>
      A button can be formatted to link to a social website
    </template>
    <template #example>
      <SuiButton facebook icon="facebook" content=" Facebook" />
      <SuiButton twitter icon="twitter" content=" Twitter" />
      <SuiButton vk icon="vk" content="VK" />
      <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
      <SuiButton instagram icon="instagram" content=" Instagram" />
      <SuiButton youtube icon="youtube" content=" YouTube" />
      <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
      <SuiButton telegram icon="telegram" content=" Telegram" />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton facebook icon="facebook" content=" Facebook" />
  <SuiButton twitter icon="twitter" content=" Twitter" />
  <SuiButton vk icon="vk" content="VK" />
  <SuiButton linkedin icon="linkedin" content=" LinkedIn" />
  <SuiButton instagram icon="instagram" content=" Instagram" />
  <SuiButton youtube icon="youtube" content=" YouTube" />
  <SuiButton whatsapp icon="whatsapp" content=" WhatsApp" />
  <SuiButton telegram icon="telegram" content=" Telegram" />
<\/template>`
</script>

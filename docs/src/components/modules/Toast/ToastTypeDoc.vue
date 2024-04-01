<template>
  <DocSection label="Toast Type" :code="code">
    <template #description>
      A toast can be used to display different types of informations.
    </template>
    <template #example>
      <SuiButton @click="show('success')" positive>Success</SuiButton>
      <SuiButton @click="show('error')" negative>Error</SuiButton>
      <SuiButton @click="show('warning')" color="yellow">Warning</SuiButton>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (type) => {
  toast({
    message: 'You\'re using the good framework !',
    type,
  })
}

const code = `<template>
  <SuiButton @click="show('success')" positive>Success</SuiButton>
  <SuiButton @click="show('error')" negative>Error</SuiButton>
  <SuiButton @click="show('warning')" color="yellow">Warning</SuiButton>
<\/template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (type) => {
  toast({
    message: 'You\'re using the good framework !',
    type,
  })
}
<\/script>`
</script>

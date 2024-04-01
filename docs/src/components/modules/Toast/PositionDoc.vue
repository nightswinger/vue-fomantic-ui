<template>
  <DocSection label="Position" :code="code">
    <template #description>
      A toast can appear at different positions on the screen.
    </template>
    <template #example>
      <SuiButton @click="show('top left')">Top Left</SuiButton>
      <SuiButton @click="show('bottom right')">Bottom Right</SuiButton>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (position) => {
  toast({
    position,
    message: `Look, I'm here !`
  })
}

const code = `<template>
  <SuiButton @click="show('top left')">Top Left</SuiButton>
  <SuiButton @click="show('bottom right')">Bottom Right</SuiButton>
<\/template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (position) => {
  toast({
    position,
    message: 'Look, I\'m here !'
  })
}
<\/script>`
</script>

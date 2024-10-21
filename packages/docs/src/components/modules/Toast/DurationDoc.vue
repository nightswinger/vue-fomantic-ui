<template>
  <DocSection label="Duration" :code="code">
    <template #description>
      You can choose how long a toast should be displayed.
    </template>
    <template #example>
      <SuiButton @click="show(5000)">5 seconds</SuiButton>
      <SuiButton @click="show(0)">Stay</SuiButton>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (displayTime) => {
  toast({
    displayTime,
    message: displayTime === 0 ? `I'll stay here until you click on me !` : `You will see me for 5 seconds.`
  })
}

const code = `<template>
  <SuiButton @click="show(5000)">5 seconds</SuiButton>
  <SuiButton @click="show(0)">Stay</SuiButton>
<\/template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (displayTime) => {
  toast({
    displayTime,
    message: displayTime === 0 ? 'I\'ll stay here until you click on me !' : 'You will see me for 5 seconds.'
  })
}
<\/script>`
</script>

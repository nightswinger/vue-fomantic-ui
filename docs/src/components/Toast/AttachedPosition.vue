<template>
  <DocSection label="Attached Position" :code="code">
    <template #description>
      A toast can have an attached position which will show the toast over the whole width of the screen.<br>
      Just like notifications on mobile devices.
    </template>
    <template #example>
      <SuiButton @click="show('top')">Top</SuiButton>
      <SuiButton @click="show('bottom')">Bottom</SuiButton>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '../doc/DocSection.vue'

import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (attached) => {
  toast({
    attached,
    title: 'Watch out!',
    message: `I am a ${attached} attached toast`
  })
}

const code = `<template>
  <SuiButton @click="show('top')">Top</SuiButton>
  <SuiButton @click="show('bottom')">Bottom</SuiButton>
<\/template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = (attached) => {
  toast({
    attached,
    title: 'Watch out!',
    message: 'I am a ' + attached + ' attached toast'
  })
}
<\/script>`
</script>

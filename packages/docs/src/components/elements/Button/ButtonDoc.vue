<template>
  <DocSection label="Button" :code="code">
    <template #description>
      A standard button
    </template>
    <template #example>
      <SuiButton @click="onClick">{{ label }}</SuiButton>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'

const code = `<template>
  <SuiButton @click="onClick">{{ label }}</SuiButton>
<\/template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const label = ref('Follow')
const onClick = () => label.value = label.value === 'Follow' ? 'Following' : 'Follow'
<\/script>`
</script>

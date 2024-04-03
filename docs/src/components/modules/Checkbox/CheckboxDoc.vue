<template>
  <DocSection label="Checkbox" :code="code">
    <template #description>
      A standard checkbox
    </template>
    <template #example>
      <Checkbox label="Make my profile visible" v-model="checked" />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Checkbox } from 'vue-fomantic-ui'

const checked = ref(false)

const code = `<template>
  <Checkbox label="Make my profile visible" v-model="checked" />
<\/template>

<script setup>
import { ref } from 'vue'
import { Checkbox } from 'vue-fomantic-ui'

const checked = ref(false)
<\/script>`
</script>

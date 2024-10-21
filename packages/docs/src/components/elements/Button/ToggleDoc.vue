<template>
  <DocSection label="Toggle" :code="code">
    <template #description>
      A button can be formatted to toggle on and off
    </template>
    <template #example>
      <SuiButton
        toggle
        :active="active"
        :onClick="() => active = !active"
        :content="active ? 'Voted' : 'Vote'"
        style="min-width: 200px;"
      />
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const active = ref(false)

const code = `<template>
  <SuiButton
    toggle
    :active="active"
    :onClick="() => active = !active"
    :content="active ? 'Voted' : 'Vote'"
    style="min-width: 200px;"
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { SuiButton } from 'vue-fomantic-ui'

const active = ref(false)
<\/script>`
</script>

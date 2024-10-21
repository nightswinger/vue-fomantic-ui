<template>
  <DocSection label="Custom Interpreted Labels" :code="code">
    <template #description>
      You can provide a function which returns a custom label according to the label value
    </template>
    <template #example>
      <Slider
        v-model="value"
        labeled="ticked"
        :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
        :max="20"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref()

const code = `<template>
  <Slider
    v-model="value"
    labeled="ticked"
    :labels='["α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "σ/ς", "τ", "υ", "φ"]'
    :max="20"
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'vue-fomantic-ui'

const value = ref()
<\/script>`
</script>

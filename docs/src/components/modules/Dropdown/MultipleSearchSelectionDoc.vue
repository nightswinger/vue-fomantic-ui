<template>
  <DocSection label="Multiple Search Selection" :code="code">
    <template #description>
      A selection dropdown can allow multiple search selections
    </template>
    <template #example>
      <Dropdown
        v-model="selected"
        :options="options"
        multiple
        search
        selection
        fluid
        placeholder="State"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref([])
const options = [
  { text: 'Alabama', value: 0 },
  { text: 'Alaska', value: 1 },
  { text: 'Arizona', value: 2 },
  { text: 'Arkansas', value: 3 },
  { text: 'California', value: 4 },
  { text: 'Colorado', value: 5 },
  { text: 'Connecticut', value: 6 },
  { text: 'Delaware', value: 7 },
  { text: 'Florida', value: 8 },
  { text: 'Georgia', value: 9 },
  { text: 'Hawaii', value: 10 },
  { text: 'Idaho', value: 11 },
  { text: 'Illinois', value: 12 },
  { text: 'Indiana', value: 13 },
  { text: 'Iowa', value: 14 },
  { text: 'Kansas', value: 15 },
  { text: 'Kentucky', value: 16 },
  { text: 'Louisiana', value: 17 },
  { text: 'Maine', value: 18 },
  { text: 'Maryland', value: 19 },
  { text: 'Massachusetts', value: 20 },
  { text: 'Michigan', value: 21 },
  { text: 'Minnesota', value: 22 },
  { text: 'Mississippi', value: 23 },
  { text: 'Missouri', value: 24 },
  { text: 'Montana', value: 25 },
  { text: 'Nebraska', value: 26 },
  { text: 'Nevada', value: 27 },
  { text: 'New Hampshire', value: 28 },
  { text: 'New Jersey', value: 29 },
  { text: 'New Mexico', value: 30 },
  { text: 'New York', value: 31 },
  { text: 'North Carolina', value: 32 },
  { text: 'North Dakota', value: 33 },
  { text: 'Ohio', value: 34 },
  { text: 'Oklahoma', value: 35 },
  { text: 'Oregon', value: 36 },
  { text: 'Pennsylvania', value: 37 },
  { text: 'Rhode Island', value: 38 },
  { text: 'South Carolina', value: 39 },
  { text: 'South Dakota', value: 40 },
  { text: 'Tennessee', value: 41 },
  { text: 'Texas', value: 42 },
  { text: 'Utah', value: 43 },
  { text: 'Vermont', value: 44 },
  { text: 'Virginia', value: 45 },
  { text: 'Washington', value: 46 },
  { text: 'West Virginia', value: 47 },
  { text: 'Wisconsin', value: 48 },
  { text: 'Wyoming', value: 49 },
]

const code = `<template>
  <Dropdown
    v-model="selected"
    :options="options"
    multiple
    search
    selection
    fluid
    placeholder="State"
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref([])
const options = [
  { text: 'Alabama', value: 0 },
  { text: 'Alaska', value: 1 },
  { text: 'Arizona', value: 2 },
  { text: 'Arkansas', value: 3 },
  { text: 'California', value: 4 },
  { text: 'Colorado', value: 5 },
  { text: 'Connecticut', value: 6 },
  { text: 'Delaware', value: 7 },
  { text: 'Florida', value: 8 },
  { text: 'Georgia', value: 9 },
  { text: 'Hawaii', value: 10 },
  { text: 'Idaho', value: 11 },
  { text: 'Illinois', value: 12 },
  { text: 'Indiana', value: 13 },
  { text: 'Iowa', value: 14 },
  { text: 'Kansas', value: 15 },
  { text: 'Kentucky', value: 16 },
  { text: 'Louisiana', value: 17 },
  { text: 'Maine', value: 18 },
  { text: 'Maryland', value: 19 },
  { text: 'Massachusetts', value: 20 },
  { text: 'Michigan', value: 21 },
  { text: 'Minnesota', value: 22 },
  { text: 'Mississippi', value: 23 },
  { text: 'Missouri', value: 24 },
  { text: 'Montana', value: 25 },
  { text: 'Nebraska', value: 26 },
  { text: 'Nevada', value: 27 },
  { text: 'New Hampshire', value: 28 },
  { text: 'New Jersey', value: 29 },
  { text: 'New Mexico', value: 30 },
  { text: 'New York', value: 31 },
  { text: 'North Carolina', value: 32 },
  { text: 'North Dakota', value: 33 },
  { text: 'Ohio', value: 34 },
  { text: 'Oklahoma', value: 35 },
  { text: 'Oregon', value: 36 },
  { text: 'Pennsylvania', value: 37 },
  { text: 'Rhode Island', value: 38 },
  { text: 'South Carolina', value: 39 },
  { text: 'South Dakota', value: 40 },
  { text: 'Tennessee', value: 41 },
  { text: 'Texas', value: 42 },
  { text: 'Utah', value: 43 },
  { text: 'Vermont', value: 44 },
  { text: 'Virginia', value: 45 },
  { text: 'Washington', value: 46 },
  { text: 'West Virginia', value: 47 },
  { text: 'Wisconsin', value: 48 },
  { text: 'Wyoming', value: 49 },
]
<\/script>`
</script>

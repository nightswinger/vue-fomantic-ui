<template>
  <DocSection label="Icon" :code="code">
    <template #description>
      A dropdown menu can contain an icon.
    </template>
    <template #example>
      <Dropdown
        v-model="selected"
        :options="options"
        button
        floating
        labeled
        icon="filter"
        text="Filter"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { header: 'Filter by tag', icon: 'tags' },
  { divider: true },
  { text: 'Important', icon: 'attention' },
  { text: 'Announcement', icon: 'comment' },
  { text: 'Discussion', icon: 'conversation' },
]

const code = `<template>
  <Dropdown
    v-model="selected"
    :options="options"
    button
    floating
    labeled
    icon="filter"
    text="Filter"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { header: 'Filter by tag', icon: 'tags' },
  { divider: true },
  { text: 'Important', icon: 'attention' },
  { text: 'Announcement', icon: 'comment' },
  { text: 'Discussion', icon: 'conversation' },
]
<\/script>`
</script>

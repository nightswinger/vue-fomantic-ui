<template>
  <DocSection label="Floating" :code="code">
    <template #description>
      A dropdown menu can appear to be floating below an element
    </template>
    <template #example>
      <ButtonGroup color="teal">
        <Button>Save</Button>
        <Dropdown
          v-model="selected"
          :options="options"
          button
          icon="dropdown"
          floating
        />
      </ButtonGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Dropdown, ButtonGroup, Button } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { text: "Edit Post", icon: "edit" },
  { text: "Remove Post", icon: "delete" },
  { text: "Hide Post", icon: "hide" },
]

const code = `<template>
  <ButtonGroup color="teal">
    <Button>Save</Button>
    <Dropdown
      v-model="selected"
      :options="options"
      button
      floating
    />
  </ButtonGroup>
</template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { text: "Edit Post", icon: "edit" },
  { text: "Remove Post", icon: "delete" },
  { text: "Hide Post", icon: "hide" },
]
<\/script>`
</script>

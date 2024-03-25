<template>
  <DocSection label="Menu" :code="code">
    <template #description>
      A menu
    </template>
    <template #example>
      <Menu
        :items="items"
        :widths="items.length"
        @selected="(v) => console.log(v)"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref(["Editorials", "Reviews", "Upcoming Events"])

const code = `<template>
  <Menu
    :items="items"
    :widths="items.length"
    @selected="(v) => console.log(v)"
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'vue-fomantic-ui'

const items = ref(["Editorials", "Reviews", "Upcoming Events"])
<\/script>`
</script>

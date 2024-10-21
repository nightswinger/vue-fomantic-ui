<template>
  <DocSection label="Horizontal" :code="code">
    <template #description>
      A horizontal label is formatted to label content along-side it horizontally
    </template>
    <template #example>
      <SuiList divided selection>
        <SuiListItem>
          <SuiLabel color="red" horizontal>Fruit</SuiLabel>
          Kumquats
        </SuiListItem>
        <SuiListItem>
          <SuiLabel color="purple" horizontal>Candy</SuiLabel>
          Ice Cream
        </SuiListItem>
        <SuiListItem>
          <SuiLabel color="red" horizontal>Fruit</SuiLabel>
          Orange
        </SuiListItem>
        <SuiListItem>
          <SuiLabel horizontal>Dog</SuiLabel>
          Poodle
        </SuiListItem>
      </SuiList>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel, SuiList, SuiListItem } from 'vue-fomantic-ui'

const code = `<template>
  <SuiList divided selection>
    <SuiListItem>
      <SuiLabel color="red" horizontal>Fruit</SuiLabel>
      Kumquats
    </SuiListItem>
    <SuiListItem>
      <SuiLabel color="purple" horizontal>Candy</SuiLabel>
      Ice Cream
    </SuiListItem>
    <SuiListItem>
      <SuiLabel color="red" horizontal>Fruit</SuiLabel>
      Orange
    </SuiListItem>
    <SuiListItem>
      <SuiLabel horizontal>Dog</SuiLabel>
      Poodle
    </SuiListItem>
  </SuiList>
</template>`
</script>

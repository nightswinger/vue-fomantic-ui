<template>
  <DocSection label="Link" :code="code">
    <template #description>
      A list can be specially formatted for navigation links
    </template>
    <template #example>
      <List link>
        <ListItem active>Home</ListItem>
        <ListItem as="a">About</ListItem>
        <ListItem as="a">Jobs</ListItem>
        <ListItem as="a">Team</ListItem>
      </List>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { List, ListItem } from 'vue-fomantic-ui'

const code = `<template>
  <List link>
    <ListItem active>Home</ListItem>
    <ListItem as="a">About</ListItem>
    <ListItem as="a">Jobs</ListItem>
    <ListItem as="a">Team</ListItem>
  </List>
</template>`
</script>

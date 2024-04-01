<template>
  <DocSection label="Hedaer" :code="code">
    <template #description>
      A list item can contain a header
    </template>
    <template #example>
      <List>
        <ListItem>
          <ListHeader>New York City</ListHeader>
          A lovely city
        </ListItem>
        <ListItem>
          <ListHeader>Chicago</ListHeader>
          Also quite a lovely city
        </ListItem>
        <ListItem>
          <ListHeader>Los Angeles</ListHeader>
          Sometimes can be a lovely city
        </ListItem>
        <ListItem>
          <ListHeader>San Francisco</ListHeader>
          What a lovely city
        </ListItem>
      </List>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { List, ListItem, ListHeader } from 'vue-fomantic-ui'

const code = `<template>
  <List>
    <ListItem>
      <ListHeader>New York City</ListHeader>
      A lovely city
    </ListItem>
    <ListItem>
      <ListHeader>Chicago</ListHeader>
      Also quite a lovely city
    </ListItem>
    <ListItem>
      <ListHeader>Los Angeles</ListHeader>
      Sometimes can be a lovely city
    </ListItem>
    <ListItem>
      <ListHeader>San Francisco</ListHeader>
      What a lovely city
    </ListItem>
  </List>
</template>`
</script>

<template>
  <DocSection label="Pointing" :code="code">
    <template #description>
      A menu can point to show its relationship to nearby content
    </template>
    <template #example>
      <Menu pointing :items="items">
        <template #right>
          <MenuItem as="div">
            <Input icon="search" placeholder="Search..." />
          </MenuItem>
        </template>
      </Menu>
      <Segment>
        <img src="/images/wireframe/paragraph.png" />
      </Segment>

      <Menu secondary pointing :items="items">
        <template #right>
          <MenuItem>
            Logout
          </MenuItem>
        </template>
      </Menu>
      <Segment>
        <img src="/images/wireframe/media-paragraph.png" />
      </Segment>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Menu, MenuItem, Input, Segment } from 'vue-fomantic-ui'

const items = ref(['Home', 'Messages', 'Friends'])

const code = `<template>
  <Menu pointing :items="items">
    <template #right>
      <MenuItem as="div">
        <Input icon="search" placeholder="Search..." />
      </MenuItem>
    </template>
  </Menu>
  <Segment>
    <img src="/images/wireframe/paragraph.png" />
  </Segment>

  <Menu secondary pointing :items="items">
    <template #right>
      <MenuItem>
        Logout
      </MenuItem>
    </template>
  </Menu>
  <Segment>
    <img src="/images/wireframe/media-paragraph.png" />
  </Segment>
<\/template>

<script setup>
import { ref } from 'vue'
import { Menu, MenuItem, Input, Segment } from 'vue-fomantic-ui'

const items = ref(['Home', 'Messages', 'Friends'])
<\/script>`
</script>

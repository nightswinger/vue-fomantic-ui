<template>
  <DocSection label="Header" :code="code">
    <template #description>
      An item can contain a header
    </template>
    <template #example>
      <ItemGroup>
        <Item v-for="text in ['12 Years a Slave', 'My Neighbor Totoro', 'Watchmen']">
          <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
          <ItemContent verticalAlign="middle">
            <template #header>
              {{ text }}
            </template>
          </ItemContent>
        </Item>
      </ItemGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Item, ItemGroup, ItemContent, Image } from 'vue-fomantic-ui'

const code = `<template>
  <ItemGroup>
    <Item v-for="text in ['12 Years a Slave', 'My Neighbor Totoro', 'Watchmen']">
      <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent verticalAlign="middle">
        <template #header>
          {{ text }}
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
<\/template>`
</script>

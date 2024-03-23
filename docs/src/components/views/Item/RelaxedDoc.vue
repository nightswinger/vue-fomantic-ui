<template>
  <DocSection label="Relaxed" :code="code">
    <template #description>
      A group of items can relax its padding to provide more negative space
    </template>
    <template #example>
      <ItemGroup relaxed>
        <Item v-for="text in ['12 Years a Slave', 'My Neighbor Totoro', 'Watchmen']">
          <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
          <ItemContent verticalAlign="middle">
            <template #header>
              {{ text }}
            </template>
          </ItemContent>
        </Item>
      </ItemGroup>
      <ItemGroup relaxed="very">
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
  <ItemGroup relaxed>
    <Item v-for="text in ['12 Years a Slave', 'My Neighbor Totoro', 'Watchmen']">
      <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent verticalAlign="middle">
        <template #header>
          {{ text }}
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
  <ItemGroup relaxed="very">
    <Item v-for="text in ['12 Years a Slave', 'My Neighbor Totoro', 'Watchmen']">
      <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent verticalAlign="middle">
        <template #header>
          {{ text }}
        </template>
      </ItemContent>
    </Item>
<\/template>`
</script>

<template>
  <DocSection label="Vertical Alignment" :code="code">
    <template #description>
      Content can specify its vertical alignment
    </template>
    <template #example>
      <ItemGroup>
        <Item>
          <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
          <ItemContent>
            <template #header>
              Top Aligned
            </template>
          </ItemContent>
        </Item>
        <Item>
          <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
          <ItemContent verticalAlign="middle">
            <template #header>
              Middle Aligned
            </template>
          </ItemContent>
        </Item>
        <Item>
          <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
          <ItemContent verticalAlign="bottom">
            <template #header>
              Bottom Aligned
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
    <Item>
      <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent>
        <template #header>
          Top Aligned
        </template>
      </ItemContent>
    </Item>
    <Item>
      <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent verticalAlign="middle">
        <template #header>
          Middle Aligned
        </template>
      </ItemContent>
    </Item>
    <Item>
      <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent verticalAlign="bottom">
        <template #header>
          Bottom Aligned
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
<\/template>`
</script>

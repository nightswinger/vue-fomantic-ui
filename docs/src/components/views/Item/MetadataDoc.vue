<template>
  <DocSection label="Metadata" :code="code">
    <template #description>
      An item can contain content metadata
    </template>
    <template #example>
      <ItemGroup>
        <Item>
          <Image wrapped size="small" src="/vue-fomantic-ui/images/wireframe/image.png" />
          <ItemContent>
            <template #header>
              Arrowhead Valley Camp
            </template>
            <template #metadata>
              <span class="price">$1200</span>
              <span class="stay">1 Month</span>
            </template>
            <template #description>
              <img src="/images/wireframe/short-paragraph.png">
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
      <Image wrapped size="small" src="/vue-fomantic-ui/wireframe/image.png" />
      <ItemContent>
        <template #header>
          Arrowhead Valley Camp
        </template>
        <template #metadata>
          <span class="price">$1200</span>
          <span class="stay">1 Month</span>
        </template>
        <template #description>
          <img src="/images/wireframe/short-paragraph.png">
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
<\/template>`
</script>

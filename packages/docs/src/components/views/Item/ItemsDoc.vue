<template>
  <DocSection label="Items" :code="code">
    <template #description>
      A group of items.
    </template>
    <template #example>
      <ItemGroup>
        <Item>
          <template #image>
            <img src="/images/wireframe/image.png">
          </template>
          <template #header>
            Header
          </template>
          <template #metadata>
            Description
          </template>
          <template #description>
            <img src="/images/wireframe/short-paragraph.png">
          </template>
          <template #extra>
            Additional Details
          </template>
        </Item>
        <Item>
          <template #image>
            <img src="/images/wireframe/image.png">
          </template>
          <template #header>
            Header
          </template>
          <template #metadata>
            Description
          </template>
          <template #description>
            <img src="/images/wireframe/short-paragraph.png">
          </template>
          <template #extra>
            Additional Details
          </template>
        </Item>
      </ItemGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Item, ItemGroup } from 'vue-fomantic-ui'

const code = `<template>
  <ItemGroup>
    <Item>
      <template #image>
        <img src="/images/wireframe/image.png">
      </template>
      <template #header>
        Header
      </template>
      <template #metadata>
        Description
      </template>
      <template #description>
        <img src="/images/wireframe/short-paragraph.png">
      </template>
      <template #extra>
        Additional Details
      </template>
    </Item>
    <Item>
      <template #image>
        <img src="/images/wireframe/image.png">
      </template>
      <template #header>
        Header
      </template>
      <template #metadata>
        Description
      </template>
      <template #description>
        <img src="/images/wireframe/short-paragraph.png">
      </template>
      <template #extra>
        Additional Details
      </template>
    </Item>
  </ItemGroup>
<\/template>`
</script>

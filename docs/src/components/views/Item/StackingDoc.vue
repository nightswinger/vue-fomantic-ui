<template>
  <DocSection label="Stacking" :code="code">
    <template #description>
      A table can specify how it stacks items responsively
    </template>
    <template #example>
      <ItemGroup unstackable>
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
  <ItemGroup unstackable>
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

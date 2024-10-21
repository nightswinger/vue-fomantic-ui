<template>
  <DocSection label="Floated Content" :code="code">
    <template #description>
      Any content element can be floated left or right
    </template>
    <template #example>
      <ItemGroup>
        <Item v-for="text in ['A', 'B', 'C']">
          <Image wrapped size="small" src="/vue-fomantic-ui/images/wireframe/image.png" />
          <ItemContent verticalAlign="middle">
            <template #header>
              Content {{ text }}
            </template>
            <template #description>
              <img src="/images/wireframe/short-paragraph.png">
            </template>
            <template #extra>
              <Button floated="right">Action</Button>
            </template>
          </ItemContent>
        </Item>
      </ItemGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Item, ItemGroup, ItemContent, Image, Button } from 'vue-fomantic-ui'

const code = `<template>
  <ItemGroup>
    <Item v-for="text in ['A', 'B', 'C']">
      <Image wrapped size="small" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent verticalAlign="middle">
        <template #header>
          Content {{ text }}
        </template>
        <template #description>
          <img src="/images/wireframe/short-paragraph.png">
        </template>
        <template #extra>
          <Button floated="right">Action</Button>
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
<\/template>`
</script>

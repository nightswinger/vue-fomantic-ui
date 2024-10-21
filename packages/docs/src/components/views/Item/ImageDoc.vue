<template>
  <DocSection label="Image" :code="code">
    <template #description>
      An item can contain an image
    </template>
    <template #example>
      <ItemGroup divided>
        <Item v-for="i in [1,2,3]">
          <template #image>
            <img src="/images/wireframe/image.png">
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
  <ItemGroup divided>
    <Item v-for="i in [1,2,3]">
      <template #image>
        <img src="/images/wireframe/image.png">
      </template>
    </Item>
  </ItemGroup>
<\/template>`
</script>

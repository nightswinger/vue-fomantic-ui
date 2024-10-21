<template>
  <DocSection label="Content" :code="code">
    <template #description>
      An item can contain content
    </template>
    <template #example>
      <ItemGroup divided>
        <Item v-for="v in ['A','B','C']">
          <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
          <ItemContent verticalAlign="middle">
            Content {{ v }}
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
  <ItemGroup divided>
    <Item v-for="v in ['A','B','C']">
      <Image size="tiny" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent verticalAlign="middle">
        Content {{ v }}
      </ItemContent>
    </Item>
  </ItemGroup>
<\/template>`
</script>

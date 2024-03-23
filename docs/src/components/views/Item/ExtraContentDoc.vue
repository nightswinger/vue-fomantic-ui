<template>
  <DocSection label="Extra Content" :code="code">
    <template #description>
      An item can contain extra content meant to be formatted separately from the main content
    </template>
    <template #example>
      <ItemGroup>
        <Item>
          <template #header>
            Cute Dog
          </template>
          <template #description>
            <img src="/images/wireframe/short-paragraph.png">
          </template>
          <template #extra>
            <i class="green check icon"></i>
            121 Votes
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
      <template #header>
        Cute Dog
      </template>
      <template #description>
        <img src="/images/wireframe/short-paragraph.png">
      </template>
      <template #extra>
        <i class="green check icon"></i>
        121 Votes
      </template>
    </Item>
  </ItemGroup>
<\/template>`
</script>

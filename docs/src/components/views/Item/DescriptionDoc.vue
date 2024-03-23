<template>
  <DocSection label="Description" :code="code">
    <template #description>
      An item can contain a description with a single or multiple paragraphs
    </template>
    <template #example>
      <ItemGroup>
        <Item>
          <Image wrapped size="small" src="/vue-fomantic-ui/images/wireframe/image.png" />
          <ItemContent>
            <Header as="a">Cute Dog</Header>
            <template #description>
              <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
              <p>Many people also have their own barometers for what makes a cute dog.</p>
            </template>
          </ItemContent>
        </Item>
      </ItemGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Item, ItemGroup, ItemContent, Header, Image } from 'vue-fomantic-ui'

const code = `<template>
  <ItemGroup>
    <Item>
      <Image wrapped size="small" src="/vue-fomantic-ui/images/wireframe/image.png" />
      <ItemContent>
        <template #header>
          Cute Dog
        </template>
        <template #description>
          <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
          <p>Many people also have their own barometers for what makes a cute dog.</p>
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
<\/template>`
</script>

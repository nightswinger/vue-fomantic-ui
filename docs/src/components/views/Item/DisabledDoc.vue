<template>
  <DocSection label="Disabled" :code="code">
    <template #description>
      An item can be disabled
    </template>
    <template #example>
      <ItemGroup>
        <Item disabled>
          <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/veronika.jpg" />
          <ItemContent>
            <Header as="a">Veronika Ossi</Header>
            <template #description>
              <p>Veronika Ossi is a set designer living in New York who <a>enjoys</a> kittens, music, and partying.</p>
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
    <Item disabled>
      <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/veronika.jpg" />
      <ItemContent>
        <Header as="a">Veronika Ossi</Header>
        <template #description>
          <p>Veronika Ossi is a set designer living in New York who <a>enjoys</a> kittens, music, and partying.</p>
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
<\/template>`
</script>

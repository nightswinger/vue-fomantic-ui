<template>
  <DocSection label="Link Item" :code="code">
    <template #description>
      An item can be formatted so that the entire contents link to another page
    </template>
    <template #example>
      <ItemGroup link>
        <Item>
          <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/stevie.jpg" />
          <ItemContent>
            <Header as="a">Stevie Feliciano</Header>
            <template #description>
              <img src="/images/wireframe/short-paragraph.png">
            </template>
          </ItemContent>
        </Item>
        <Item>
          <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/veronika.jpg" />
          <ItemContent>
            <Header as="a">Veronika Ossi</Header>
            <template #description>
              <img src="/images/wireframe/short-paragraph.png">
            </template>
          </ItemContent>
        </Item>
        <Item>
          <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/jenny.jpg" />
          <ItemContent>
            <Header as="a">Jenny Hess</Header>
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

import { Item, ItemGroup, ItemContent, Header, Image } from 'vue-fomantic-ui'

const code = `<template>
  <ItemGroup link>
    <Item>
      <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/stevie.jpg" />
      <ItemContent>
        <Header as="a">Stevie Feliciano</Header>
        <template #description>
          <img src="/images/wireframe/short-paragraph.png">
        </template>
      </ItemContent>
    </Item>
    <Item>
      <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/veronika.jpg" />
      <ItemContent>
        <Header as="a">Veronika Ossi</Header>
        <template #description>
          <img src="/images/wireframe/short-paragraph.png">
        </template>
      </ItemContent>
    </Item>
    <Item>
      <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/jenny.jpg" />
      <ItemContent>
        <Header as="a">Jenny Hess</Header>
        <template #description>
          <img src="/images/wireframe/short-paragraph.png">
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
<\/template>`
</script>

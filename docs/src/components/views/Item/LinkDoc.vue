<template>
  <DocSection label="Link" :code="code">
    <template #description>
      An item can contain links as images, headers, or inside content
    </template>
    <template #example>
      <ItemGroup>
        <Item>
          <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/stevie.jpg" />
          <ItemContent>
            <Header as="a">Stevie Feliciano</Header>
            <template #description>
              <p>Stevie Feliciano is a <a>library scientist</a> living in New York City. She likes to spend her time reading, running, and writing.</p>
            </template>
          </ItemContent>
        </Item>
        <Item>
          <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/veronika.jpg" />
          <ItemContent>
            <Header as="a">Veronika Ossi</Header>
            <template #description>
              <p>Veronika Ossi is a set designer living in New York who <a>enjoys</a> kittens, music, and partying.</p>
            </template>
          </ItemContent>
        </Item>
        <Item>
          <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/jenny.jpg" />
          <ItemContent>
            <Header as="a">Jenny Hess</Header>
            <template #description>
              <p>Jenny is a student studying Media Management at <a>the New School</a>.</p>
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
      <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/stevie.jpg" />
      <ItemContent>
        <Header as="a">Stevie Feliciano</Header>
        <template #description>
          <p>Stevie Feliciano is a <a>library scientist</a> living in New York City. She likes to spend her time reading, running, and writing.</p>
        </template>
      </ItemContent>
    </Item>
    <Item>
      <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/veronika.jpg" />
      <ItemContent>
        <Header as="a">Veronika Ossi</Header>
        <template #description>
          <p>Veronika Ossi is a set designer living in New York who <a>enjoys</a> kittens, music, and partying.</p>
        </template>
      </ItemContent>
    </Item>
    <Item>
      <Image as="a" size="tiny" src="/vue-fomantic-ui/images/avatar/large/jenny.jpg" />
      <ItemContent>
        <Header as="a">Jenny Hess</Header>
        <template #description>
          <p>Jenny is a student studying Media Management at <a>the New School</a>.</p>
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
<\/template>`
</script>

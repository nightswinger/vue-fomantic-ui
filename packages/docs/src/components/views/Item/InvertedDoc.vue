<template>
  <DocSection label="Inverted" :code="code">
    <template #description>
      An item can be inverted to appear on a dark background
    </template>
    <template #example>
      <Segment inverted>
        <ItemGroup inverted>
          <Item>
            <Image wrapped size="small" src="/vue-fomantic-ui/images/wireframe/image.png" />
            <ItemContent>
              <template #header>
                Arrowhead Valley Camp
              </template>
              <template #metadata>
                <span class="price">$1200</span>
                <span class="stay">1 Month</span>
              </template>
              <template #description>
                <img src="/images/wireframe/short-paragraph.png">
              </template>
            </ItemContent>
          </Item>
          <Item>
            <Image wrapped size="small" src="/vue-fomantic-ui/images/wireframe/image.png" />
            <ItemContent>
              <template #header>
                Buck's Homebrew Stayaway
              </template>
              <template #metadata>
                <span class="price">$1000</span>
                <span class="stay">2 Week</span>
              </template>
              <template #description>
                <img src="/images/wireframe/short-paragraph.png">
              </template>
            </ItemContent>
          </Item>
        </ItemGroup>
      </Segment>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Item, ItemGroup, ItemContent, Image, Segment } from 'vue-fomantic-ui'

const code = `<template>
  <Segment inverted>
    <ItemGroup inverted>
      <Item>
        <Image wrapped size="small" src="/vue-fomantic-ui/images/wireframe/image.png" />
        <ItemContent>
          <template #header>
            Arrowhead Valley Camp
          </template>
          <template #metadata>
            <span class="price">$1200</span>
            <span class="stay">1 Month</span>
          </template>
          <template #description>
            <img src="/images/wireframe/short-paragraph.png">
          </template>
        </ItemContent>
      </Item>
      <Item>
        <Image wrapped size="small" src="/vue-fomantic-ui/images/wireframe/image.png" />
        <ItemContent>
          <template #header>
            Buck's Homebrew Stayaway
          </template>
          <template #metadata>
            <span class="price">$1000</span>
            <span class="stay">2 Week</span>
          </template>
          <template #description>
            <img src="/images/wireframe/short-paragraph.png">
          </template>
        </ItemContent>
      </Item>
    </ItemGroup>
  </Segment>
<\/template>`
</script>

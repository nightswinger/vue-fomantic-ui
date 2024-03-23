<template>
  <DocSection label="Rating" :code="code">
    <template #description>
      An item can contain icons signifying a 'like' or 'favorite' action
    </template>
    <template #example>
      <ItemGroup>
        <Item>
          <Image wrapped size="tiny" src="/vue-fomantic-ui/images/avatar/large/jenny.jpg" />
          <ItemContent verticalAlign="middle">
            <template #header>
              <Icon name="like" />
              Veronika Ossi
            </template>
          </ItemContent>
        </Item>
        <Item>
          <Image wrapped size="tiny" src="/vue-fomantic-ui/images/avatar/large/justen.jpg" />
          <ItemContent verticalAlign="middle">
            <template #header>
              <Icon name="favorite" />
              Justen Kitsune
            </template>
          </ItemContent>
        </Item>
      </ItemGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Item, ItemGroup, ItemContent, Icon, Image } from 'vue-fomantic-ui'

const code = `<template>
  <ItemGroup>
    <Item>
      <Image wrapped size="tiny" src="/vue-fomantic-ui/images/avatar/large/jenny.jpg" />
      <ItemContent verticalAlign="middle">
        <template #header>
          <Icon name="like" />
          Veronika Ossi
        </template>
      </ItemContent>
    </Item>
    <Item>
      <Image wrapped size="tiny" src="/vue-fomantic-ui/images/avatar/large/justen.jpg" />
      <ItemContent verticalAlign="middle">
        <template #header>
          <Icon name="favorite" />
          Justen Kitsune
        </template>
      </ItemContent>
    </Item>
  </ItemGroup>
<\/template>`
</script>

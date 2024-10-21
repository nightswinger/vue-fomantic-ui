<template>
  <DocSection label="Description" :code="code">
    <template #description>
      A list item can contain a description
    </template>
    <template #example>
      <List>
        <ListItem>
          <Icon name="map marker" />
          <ListContent>
            <ListHeader as="a">Krolewskie Jadlo</ListHeader>
            <ListDescription>
              An excellent polish restaurant, quick delivery and hearty, filling meals.
            </ListDescription>
          </ListContent>
        </ListItem>
        <ListItem>
          <Icon name="map marker" />
          <ListContent>
            <ListHeader as="a">Xian Famous Foods</ListHeader>
            <ListDescription>
              A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.
            </ListDescription>
          </ListContent>
        </ListItem>
        <ListItem>
          <Icon name="map marker" />
          <ListContent>
            <ListHeader as="a">Sapporo Haru</ListHeader>
            <ListDescription>
              Greenpoint's best choice for quick and delicious sushi.
            </ListDescription>
          </ListContent>
        </ListItem>
        <ListItem>
          <Icon name="map marker" />
          <ListContent>
            <ListHeader as="a">Enid's</ListHeader>
            <ListDescription>
              At night a bar, during the day a delicious brunch spot.
            </ListDescription>
          </ListContent>
        </ListItem>
      </List>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import {
  List,
  ListItem,
  ListContent,
  ListHeader,
  ListDescription,
  Icon,
} from 'vue-fomantic-ui'

const code = `<template>
  <List>
    <ListItem>
      <Icon name="map marker" />
      <ListContent>
        <ListHeader as="a">Krolewskie Jadlo</ListHeader>
        <ListDescription>
          An excellent polish restaurant, quick delivery and hearty, filling meals.
        </ListDescription>
      </ListContent>
    </ListItem>
    <ListItem>
      <Icon name="map marker" />
      <ListContent>
        <ListHeader as="a">Xian Famous Foods</ListHeader>
        <ListDescription>
          A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.
        </ListDescription>
      </ListContent>
    </ListItem>
    <ListItem>
      <Icon name="map marker" />
      <ListContent>
        <ListHeader as="a">Sapporo Haru</ListHeader>
        <ListDescription>
          Greenpoint's best choice for quick and delicious sushi.
        </ListDescription>
      </ListContent>
    </ListItem>
    <ListItem>
      <Icon name="map marker" />
      <ListContent>
        <ListHeader as="a">Enid's</ListHeader>
        <ListDescription>
          At night a bar, during the day a delicious brunch spot.
        </ListDescription>
      </ListContent>
    </ListItem>
  </List>
</template>`
</script>

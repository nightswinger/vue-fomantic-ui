<template>
  <DocSection label="Link Card" :code="code">
    <template #description>
      A card can be formatted so that the entire contents link to another page
    </template>
    <template #example>
      <Card href="https://dog.com">
        <CardContent header="Cute Dog">
          <template #meta>
            <span>2 days ago</span>
            <a>Animals</a>
          </template>
          <template #description>
            <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
          </template>
        </CardContent>
        <CardContent extra>
          <div class="right floated">
            <Image avatar src="/vue-fomantic-ui/images/avatar/small/matt.jpg" />
            Matt
          </div>
        </CardContent>
      </Card>
      <Card link>
        <CardContent header="Cute Dog">
          <template #meta>
            <span>2 days ago</span>
            <a>Animals</a>
          </template>
          <template #description>
            <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
          </template>
        </CardContent>
        <CardContent extra>
          <div class="right floated">
            <Image avatar src="/vue-fomantic-ui/images/avatar/small/matt.jpg" />
            Matt
          </div>
        </CardContent>
      </Card>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import {
  Card,
  CardContent,
  Image,
} from 'vue-fomantic-ui'

const code = `<template>
  <Card href="https://dog.com">
    <CardContent header="Cute Dog">
      <template #meta>
        <span>2 days ago</span>
        <a>Animals</a>
      </template>
      <template #description>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </template>
    </CardContent>
    <CardContent extra>
      <div class="right floated">
        <Image avatar src="/vue-fomantic-ui/images/avatar/small/matt.jpg" />
        Matt
      </div>
    </CardContent>
  </Card>
  <Card link>
    <CardContent header="Cute Dog">
      <template #meta>
        <span>2 days ago</span>
        <a>Animals</a>
      </template>
      <template #description>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </template>
    </CardContent>
    <CardContent extra>
      <div class="right floated">
        <Image avatar src="/vue-fomantic-ui/images/avatar/small/matt.jpg" />
        Matt
      </div>
    </CardContent>
  </Card>
<\/template>`
</script>

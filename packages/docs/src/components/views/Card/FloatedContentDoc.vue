<template>
  <DocSection label="Floated Content" :code="code">
    <template #description>
      Any content element can be floated left or right
    </template>
    <template #example>
      <Card>
        <CardContent header="Cute Dog">
          <template #meta>
            <span class="right floated">2 days ago</span>
            Animals
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
  <Card>
    <CardContent header="Cute Dog">
      <template #meta>
        <span class="right floated">2 days ago</span>
        Animals
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

<template>
  <DocSection label="Approval" :code="code">
    <template #description>
      A card can contain a like or star action.
    </template>
    <template #example>
      <Card>
        <CardContent>
          <template #header>
            Cute Dog

          </template>
          <template #description>
            <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
          </template>
        </CardContent>
        <CardContent extra>
          <span class="left floated like">
            <i class="like icon"></i>
            Like
          </span>
          <span class="right floated star">
            <i class="star icon"></i>
            Favorite
          </span>
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
    <CardContent>
      <template #header>
        Cute Dog
      </template>
      <template #description>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </template>
      <CardContent extra>
        <span class="left floated like">
          <i class="like icon"></i>
          Like
        </span>
        <span class="right floated star">
          <i class="star icon"></i>
          Favorite
        </span>
      </CardContent>
    </CardContent>
  </Card>
<\/tempalte>`
</script>

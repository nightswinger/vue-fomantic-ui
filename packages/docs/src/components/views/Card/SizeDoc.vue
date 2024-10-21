<template>
  <DocSection label="Size" :code="code">
    <template #description>
      A card text can vary in size
    </template>
    <template #example>
      <CardGroup :itemsPerRow="3">
        <Card
          v-for="size in ['mini', 'tiny', 'small']"
          :key="size"
          :size="(size as any)"
        >
          <CardContent>
            <template #header>
              {{ size }}
            </template>
            <template #meta>
              Variant
            </template>
            <template #description>
              This is a {{ size }} card
            </template>
          </CardContent>
          <CardContent extra>
            <div class="right floated author">
              Fomantic-UI
            </div>
          </CardContent>
        </Card>
      </CardGroup>

      <CardGroup :itemsPerRow="2">
        <Card
          v-for="size in ['large', 'big']"
          :key="size"
          :size="(size as any)"
        >
          <CardContent>
            <template #header>
              {{ size }}
            </template>
            <template #meta>
              Variant
            </template>
            <template #description>
              This is a {{ size }} card
            </template>
          </CardContent>
          <CardContent extra>
            <div class="right floated author">
              Fomantic-UI
            </div>
          </CardContent>
        </Card>
      </CardGroup>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import {
  Card,
  CardContent,
  CardGroup,
} from 'vue-fomantic-ui'

const code = `<template>
  <CardGroup :itemsPerRow="3">
    <Card
      v-for="size in ['mini', 'tiny', 'small']"
      :key="size"
      :size="size"
    >
      <CardContent>
        <template #header>
          {{ size }}
        </template>
        <template #meta>
          Variant
        </template>
        <template #description>
          This is a {{ size }} card
        </template>
      </CardContent>
      <CardContent extra>
        <div class="right floated author">
          Fomantic-UI
        </div>
      </CardContent>
    </Card>
  </CardGroup>

  <CardGroup :itemsPerRow="2">
    <Card
      v-for="size in ['large', 'big']"
      :key="size"
      :size="size"
    >
      <CardContent>
        <template #header>
          {{ size }}
        </template>
        <template #meta>
          Variant
        </template>
        <template #description>
          This is a {{ size }} card
        </template>
      </CardContent>
      <CardContent extra>
        <div class="right floated author">
          Fomantic-UI
        </div>
      </CardContent>
    </Card>
  </CardGroup>
<\/template>`
</script>

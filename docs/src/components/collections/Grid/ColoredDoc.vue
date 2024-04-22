<template>
  <DocSection label="Colored" :code="code">
    <template #description>
      A row or column can be colored
    </template>
    <template #example>
      <Grid padded :columns="5">
        <GridColumn v-for="color in colors" :key="color" :color="color">
          {{ color }}
        </GridColumn>
      </Grid>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Grid, GridColumn, Image } from 'vue-fomantic-ui'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

const code = `<template>
  <Grid padded :columns="5">
    <GridColumn v-for="color in colors" :key="color" :color="color">
      {{ color }}
    </GridColumn>
  </Grid>
<\/template>

<script setup>
import { Grid, GridColumn } from 'vue-fomantic-ui'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]
<\/script>`
</script>

<template>
  <DocSection label="Stackable" :code="code">
    <template #description>
      A grid can have its columns stack on-top of each other after reaching mobile breakpoints
    </template>
    <template #example>
      <Grid stackable :columns="2">
        <GridColumn v-for="i in 2" :key="i">
          <Segment>
            <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
          </Segment>
        </GridColumn>
      </Grid>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Grid, GridColumn, Image, Segment } from 'vue-fomantic-ui'

const code = `<template>
  <Grid stackable :columns="2">
    <GridColumn v-for="i in 2" :key="i">
      <Segment>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </Segment>
    </GridColumn>
  </Grid>
<\/template>`
</script>

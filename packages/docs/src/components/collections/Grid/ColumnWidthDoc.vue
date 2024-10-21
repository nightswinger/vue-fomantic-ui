<template>
  <DocSection label="Column Width" :code="code">
    <template #description>
      A column can vary in width taking up more than a single grid column
    </template>
    <template #example>
      <Grid>
        <GridColumn :width="4">
          <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
        </GridColumn>
        <GridColumn :width="9">
          <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </GridColumn>
        <GridColumn :width="3">
          <Image src="/vue-fomantic-ui/images/wireframe/media-paragraph.png" />
        </GridColumn>
      </Grid>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Grid, GridColumn, Image } from 'vue-fomantic-ui'

const code = `<template>
  <Grid>
    <GridColumn :width="4">
      <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
    </GridColumn>
    <GridColumn :width="9">
      <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
    </GridColumn>
    <GridColumn :width="3">
      <Image src="/vue-fomantic-ui/images/wireframe/media-paragraph.png" />
    </GridColumn>
  </Grid>
<\/template>`
</script>

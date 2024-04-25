<template>
  <DocSection label="Floated" :code="code">
    <template #description>
      A column can sit flush against the left or right edge of a row
    </template>
    <template #example>
      <Grid>
        <GridColumn :width="5" floated="left">
          <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </GridColumn>
        <GridColumn :width="5" floated="right">
          <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
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
    <GridColumn :width="5" floated="left">
      <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
    </GridColumn>
    <GridColumn :width="5" floated="right">
      <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
    </GridColumn>
  </Grid>
<\/template>`
</script>

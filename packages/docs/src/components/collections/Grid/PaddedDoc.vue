<template>
  <DocSection label="Padded" :code="code">
    <template #description>
      A grid can preserve its vertical and horizontal gutters on first and last columns.
    </template>
    <template #example>
      <p>
        The following grid has vertical and horizontal gutters.
      </p>
      <Grid :columns="2" padded>
        <GridColumn>
          <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </GridColumn>
        <GridColumn>
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
  <p>
    The following grid has vertical and horizontal gutters.
  </p>
  <Grid :columns="2" padded>
    <GridColumn>
      <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
    </GridColumn>
    <GridColumn>
      <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
    </GridColumn>
  </Grid>
<\/template>`
</script>

<template>
  <DocSection label="Rows" :code="code">
    <template #description>
      A row is a horizontal grouping of columns
    </template>
    <template #example>
      <Grid :columns="3">
        <GridRow>
          <GridColumn>
            <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
          </GridColumn>
          <GridColumn>
            <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
          </GridColumn>
          <GridColumn>
            <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
          </GridColumn>
          <GridColumn>
            <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
          </GridColumn>
        </GridRow>
      </Grid>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Grid, GridRow, GridColumn, Image } from 'vue-fomantic-ui'

const code = `<template>
  <Grid :columns="3">
    <GridRow>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
    </GridRow>
  </Grid>
<\/template>`
</script>

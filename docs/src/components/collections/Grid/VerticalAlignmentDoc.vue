<template>
  <DocSection label="Vertical Alignment" :code="code">
    <template #description>
      A grid, row, or column can specify its vertical alignment to have all its columns vertically centered
    </template>
    <template #example>
      <Grid verticalAlign="middle" :columns="4" centered>
        <GridRow>
          <GridColumn>
            <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
          </GridColumn>
          <GridColumn>
            <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
            <br />
            <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
          </GridColumn>
          <GridColumn>
            <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
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
  <Grid verticalAlign="middle" :columns="4" centered>
    <GridRow>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
        <br />
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
    </GridRow>
  </Grid>
<\/template>`
</script>

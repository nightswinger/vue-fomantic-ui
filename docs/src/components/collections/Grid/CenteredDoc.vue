<template>
  <DocSection label="Centered" :code="code">
    <template #description>
      A grid can have its columns centered
    </template>
    <template #example>
      <Grid centered :columns="2">
        <GridColumn>
          <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
        </GridColumn>
        <GridRow centered :columns="4">
          <GridColumn>
            <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
          </GridColumn>
          <GridColumn>
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
  <Grid centered :columns="2">
    <GridColumn>
      <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
    </GridColumn>
    <GridRow centered :columns="4">
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
      <GridColumn>
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
    </GridRow>
  </Grid>
<\/template>`
</script>

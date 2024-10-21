<template>
  <DocSection label="Celled" :code="code">
    <template #description>
      A grid can have rows divided into cells
    </template>
    <template #example>
      <Grid celled>
        <GridRow>
          <GridColumn :width="3">
            <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
          </GridColumn>
          <GridColumn :width="13">
            <Image src="/vue-fomantic-ui/images/wireframe/centered-paragraph.png" />
          </GridColumn>
        </GridRow>

        <GridRow>
          <GridColumn :width="3">
            <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
          </GridColumn>
          <GridColumn :width="10">
            <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
          </GridColumn>
          <GridColumn :width="3">
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
  <Grid celled>
    <GridRow>
      <GridColumn :width="3">
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
      <GridColumn :width="13">
        <Image src="/vue-fomantic-ui/images/wireframe/centered-paragraph.png" />
      </GridColumn>
    </GridRow>

    <GridRow>
      <GridColumn :width="3">
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
      <GridColumn :width="10">
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
      <GridColumn :width="3">
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
    </GridRow>
  </Grid>
<\/template>`
</script>

<template>
  <DocSection label="Column Count" :code="code">
    <template #description>
      A grid can have a different number of columns per row
    </template>
    <template #example>
      <Grid>
        <GridRow :columns="3">
          <GridColumn v-for="i in 3" :key="i">
            <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
          </GridColumn>
        </GridRow>
        <GridRow :columns="4">
          <GridColumn v-for="i in 4" :key="i">
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
  <Grid>
    <GridRow :columns="3">
      <GridColumn v-for="i in 3" :key="i">
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
    </GridRow>
    <GridRow :columns="4">
      <GridColumn v-for="i in 4" :key="i">
        <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
      </GridColumn>
    </GridRow>
  </Grid>
<\/template>`
</script>

<template>
  <DocSection label="Columns" :code="code">
    <template #description>
      Columns each contain gutters giving them equal spacing from other columns
    </template>
    <template #example>
      <Grid>
        <GridColumn :width="8" v-for="i in 4" :key="i">
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
    <GridColumn :width="8" v-for="i in 4" :key="i">
      <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
    </GridColumn>
  </Grid>
<\/template>`
</script>

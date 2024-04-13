<template>
  <DocSection label="Vertically Divided" :code="code">
    <template #description>
      A grid can have dividers between rows
    </template>
    <template #example>
      <Grid divided="vertically">
        <GridRow :columns="2">
          <GridColumn
            v-for="i in 2"
            :key="i"
          >
            <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
          </GridColumn>
        </GridRow>
        <GridRow :columns="3">
          <GridColumn
            v-for="i in 3"
            :key="i"
          >
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
  <Grid divided="vertically">
    <GridRow :columns="2">
      <GridColumn
        v-for="i in 2"
        :key="i"
      >
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
    </GridRow>
    <GridRow :columns="3">
      <GridColumn
        v-for="i in 3"
        :key="i"
      >
        <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </GridColumn>
    </GridRow>
  </Grid>
<\/template>`
</script>

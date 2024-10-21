<template>
  <DocSection label="Stretched" :code="code">
    <template #description>
      A row can stretch its contents to take up the entire column height
    </template>
    <template #example>
      <Grid :columns="3" divided>
        <GridRow stretched>
          <GridColumn>
            <Segment>1</Segment>
          </GridColumn>
          <GridColumn>
            <Segment>1</Segment>
            <Segment>2</Segment>
          </GridColumn>
          <GridColumn>
            <Segment>1</Segment>
            <Segment>2</Segment>
            <Segment>3</Segment>
          </GridColumn>
        </GridRow>
      </Grid>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Grid, GridRow, GridColumn, Segment } from 'vue-fomantic-ui'

const code = `<template>
  <Grid :columns="3" divided>
    <GridRow stretched>
      <GridColumn>
        <Segment>1</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>1</Segment>
        <Segment>2</Segment>
        <Segment>3</Segment>
      </GridColumn>
    </GridRow>
  </Grid>
<\/template>`
</script>

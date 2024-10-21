<template>
  <DocSection label="Equal Width" :code="code">
    <template #description>
      A row can automatically resize all elements to split the available width evenly.
    </template>
    <template #example>
      <Grid columns="equal">
        <GridColumn>
          <Segment>1</Segment>
        </GridColumn>
        <GridColumn :width="8">
          <Segment>2</Segment>
        </GridColumn>
        <GridColumn>
          <Segment>3</Segment>
        </GridColumn>
      </Grid>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Grid, GridColumn, Segment } from 'vue-fomantic-ui'

const code = `<template>
  <Grid columns="equal">
    <GridColumn>
      <Segment>1</Segment>
    </GridColumn>
    <GridColumn :width="8">
      <Segment>2</Segment>
    </GridColumn>
    <GridColumn>
      <Segment>3</Segment>
    </GridColumn>
  </Grid>
<\/template>`
</script>

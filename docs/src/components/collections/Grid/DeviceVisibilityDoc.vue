<template>
  <DocSection label="Device Visibility" :code="code">
    <template #description>
      A columns or row can appear only for a specific device, or screen sizes
    </template>
    <template #example>
      <Grid>
        <GridRow only="large screen" :columns="2">
          <GridColumn v-for="i in 2" :key="i">
            <Segment>Large Screen</Segment>
          </GridColumn>
        </GridRow>
        <GridRow only="widescreen" :columns="2">
          <GridColumn v-for="i in 2" :key="i">
            <Segment>WideScreen</Segment>
          </GridColumn>
        </GridRow>
        <GridRow only="mobile" :columns="2">
          <GridColumn v-for="i in 2" :key="i">
            <Segment>Mobile</Segment>
          </GridColumn>
        </GridRow>
        <GridRow :columns="3">
          <GridColumn only="computer">
            <Segment>Computer</Segment>
          </GridColumn>
          <GridColumn only="mobile">
            <Segment>Tablet and Mobile</Segment>
          </GridColumn>
          <GridColumn v-for="i in 2" :key="i">
            <Segment>All Sizes</Segment>
          </GridColumn>
        </GridRow>
        <GridRow only="computer" :columns="4">
          <GridColumn v-for="i in 4" :key="i">
            <Segment>Computer</Segment>
          </GridColumn>
        </GridRow>
        <GridRow only="tablet" :columns="3">
          <GridColumn v-for="i in 3" :key="i">
            <Segment>Tablet</Segment>
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
  <Grid>
    <GridRow only="large screen" :columns="2">
      <GridColumn v-for="i in 2" :key="i">
        <Segment>Large Screen</Segment>
      </GridColumn>
    </GridRow>
    <GridRow only="widescreen" :columns="2">
      <GridColumn v-for="i in 2" :key="i">
        <Segment>WideScreen</Segment>
      </GridColumn>
    </GridRow>
    <GridRow only="mobile" :columns="2">
      <GridColumn v-for="i in 2" :key="i">
        <Segment>Mobile</Segment>
      </GridColumn>
    </GridRow>
    <GridRow :columns="3">
      <GridColumn only="computer">
        <Segment>Computer</Segment>
      </GridColumn>
      <GridColumn only="mobile">
        <Segment>Tablet and Mobile</Segment>
      </GridColumn>
      <GridColumn v-for="i in 2" :key="i">
        <Segment>All Sizes</Segment>
      </GridColumn>
    </GridRow>
    <GridRow only="computer" :columns="4">
      <GridColumn v-for="i in 4" :key="i">
        <Segment>Computer</Segment>
      </GridColumn>
    </GridRow>
    <GridRow only="tablet" :columns="3">
      <GridColumn v-for="i in 3" :key="i">
        <Segment>Tablet</Segment>
      </GridColumn>
    </GridRow>
  </Grid>
<\/template>`
</script>

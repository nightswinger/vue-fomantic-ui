<template>
  <DocSection label="Grid" :code="code">
    <template #description>
      A basic grid
    </template>
    <template #example>
      <Grid>
        <GridColumn
          v-for="i in 16"
          :key="i"
        >
          <div
            :style="{
              backgroundColor: 'rgba(86, 61, 124, 0.1)',
              boxShadow: '0 0 0 1px rgba(86, 61, 124, 0.2) inset',
              display: 'block',
              minHeight: '50px',
            }"
          ></div>
        </GridColumn>
      </Grid>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Grid, GridColumn } from 'vue-fomantic-ui'

const code = `<template>
  <Grid>
    <GridColumn
      v-for="i in 16"
      :key="i"
    >
      <div
        :style="{
          backgroundColor: 'rgba(86, 61, 124, 0.1)',
          boxShadow: '0 0 0 1px rgba(86, 61, 124, 0.2) inset',
          display: 'block',
          minHeight: '50px',
        }"
      ></div>
    </GridColumn>
  </Grid>
<\/template>`
</script>

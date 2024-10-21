<template>
  <DocSection label="Reversed" :code="code">
    <template #description>
      A grid or row can specify that its columns should reverse order at different device sizes
    </template>
    <template #example>
      <Grid reversed="computer vertically">
        <GridRow v-for="i in 3" :key="i">
          <GridColumn>
            Computer Row {{ i }}
          </GridColumn>
        </GridRow>
      </Grid>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Grid, GridRow, GridColumn } from 'vue-fomantic-ui'

const code = `<template>
  <Grid>
    <GridRow v-for="i in 3" :key="i">
      <GridColumn>
        Computer Row {{ i }}
      </GridColumn>
    </GridRow>
  </Grid>
<\/template>`
</script>

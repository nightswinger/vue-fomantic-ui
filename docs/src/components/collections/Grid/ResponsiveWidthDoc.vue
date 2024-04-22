<template>
  <DocSection label="Responsive Width" :code="code">
    <template #description>
      A column can specify a width for a specific device
    </template>
    <template #example>
      <Grid>
        <GridColumn
          v-for="i in 5"
          :key="i"
          :mobile="16"
          :tablet="8"
          :computer="4"
        >
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
    <GridColumn
      v-for="i in 5"
      :key="i"
      :mobile="16"
      :tablet="8"
      :computer="4"
    >
      <Image src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
    </GridColumn>
  </Grid>
<\/template>`
</script>

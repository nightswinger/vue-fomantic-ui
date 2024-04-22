<template>
  <DocSection label="Doubling" :code="code">
    <template #description>
      A grid can double its column width on tablet and mobile sizes
    </template>
    <template #example>
      <Grid doubling :columns="5">
        <GridColumn v-for="i in 5" :key="i">
          <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
        </GridColumn>
      </Grid>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Grid, GridColumn, Image } from 'vue-fomantic-ui'

const code = `<template>
  <Grid doubling :columns="5">
    <GridColumn v-for="i in 5" :key="i">
      <Image src="/vue-fomantic-ui/images/wireframe/image.png" />
    </GridColumn>
  </Grid>
<\/template>`
</script>

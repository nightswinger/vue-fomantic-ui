<template>
  <DocSection label="Divided" :code="code">
    <template #description>
      A grid can have dividers between its columns
    </template>
    <template #example>
      <Grid :columns="3" divided>
        <GridRow
          v-for="i in 2"
          :key="i"
        >
          <GridColumn
            v-for="j in 3"
            :key="j"
          >
            <Image src="/vue-fomantic-ui/images/wireframe/media-paragraph.png" />
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
  <Grid :columns="3" divided>
    <GridRow
      v-for="i in 2"
      :key="i"
    >
      <GridColumn
        v-for="j in 3"
        :key="j"
      >
        <Image src="/vue-fomantic-ui/images/wireframe/media-paragraph.png" />
      </GridColumn>
    </GridRow>
  </Grid>
<\/template>`
</script>

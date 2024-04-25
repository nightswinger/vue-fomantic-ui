<template>
  <DocSection label="Text Alignment" :code="code">
    <template #description>
      A grid, row, or column can specify its text alignment
    </template>
    <template #example>
      <Grid textAlign="center" :columns="3">
        <GridRow>
          <GridColumn>
            <Menu
              vertical
              fluid
              :items="[{ header: true, text: 'Cats' }]"
            />
          </GridColumn>
          <GridColumn>
            <Menu
              vertical
              fluid
              :items="[
                { header: true, text: 'Dogs' },
                { text: 'Poodle' },
                { text: 'Cockerspaniel' },
              ]"
            />
          </GridColumn>
          <GridColumn>
            <Menu
              vertical
              fluid
              :items="[{ header: true, text: 'Monkey' }]"
            />
          </GridColumn>
        </GridRow>
      </Grid>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { Grid, GridRow, GridColumn, Menu } from 'vue-fomantic-ui'

const code = `<template>
  <Grid textAlign="center" :columns="3">
    <GridRow>
      <GridColumn>
        <Menu
          vertical
          fluid
          :items="[{ header: true, text: 'Cats' }]"
        />
      </GridColumn>
      <GridColumn>
        <Menu
          vertical
          fluid
          :items="[
            { header: true, text: 'Dogs' },
            { text: 'Poodle' },
            { text: 'Cockerspaniel' },
          ]"
        />
      </GridColumn>
      <GridColumn>
        <Menu
          vertical
          fluid
          :items="[{ header: true, text: 'Monkey' }]"
        />
      </GridColumn>
    </GridRow>
  </Grid>
<\/template>`
</script>

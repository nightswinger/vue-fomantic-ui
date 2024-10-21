<template>
  <DocSection label="Fluid Card" :code="code">
    <template #description>
      A fluid card takes up the width of its container
    </template>
    <template #example>
      <Grid :columns="3">
        <GridColumn v-for="item in items">
          <Card fluid>
            <Image :src="item.avatar" />
            <CardContent :header="item.header" />
          </Card>
        </GridColumn>
      </Grid>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import {
  Card,
  CardContent,
  Grid,
  GridColumn,
  Image,
} from 'vue-fomantic-ui'

const items = ref([
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/daniel.jpg',
    header: 'Daniel Louise',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/helen.jpg',
    header: 'Helen Troy',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/elliot.jpg',
    header: 'Elliot Fu',
  },
])

const code = `<template>
  <Grid :columns="3">
    <GridColumn v-for="item in items">
      <Card fluid>
        <Image :src="item.avatar" />
        <CardContent :header="item.header" />
      </Card>
    </GridColumn>
  </Grid>
<\/template>

<script setup>
import { ref } from 'vue'
import {
  Card,
  CardContent,
  Grid,
  GridColumn,
  Image,
} from 'vue-fomantic-ui'

const items = ref([
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/daniel.jpg',
    header: 'Daniel Louise',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/helen.jpg',
    header: 'Helen Troy',
  },
  {
    avatar: '/vue-fomantic-ui/images/avatar/large/elliot.jpg',
    header: 'Elliot Fu',
  },
])
<\/script>`
</script>

<template>
  <DocSection :code="code">
    <template #example>
      <Card
        v-for="v in ['double', 'usual double']"
        :key="v"
        :loading="(v as any)"
        color="brown"
      >
        <CardContent header="Kristy">
          <template #meta>
            <span class="date">Joined in 2013</span>
          </template>
          <template #description>
            Kristy is an art director living in New York.
          </template>
        </CardContent>
        <CardContent extra>
          <Icon name="user" />
          22 Friends
        </CardContent>
      </Card>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import {
  Card,
  CardContent,
  Icon,
} from 'vue-fomantic-ui'

const code = `<template>
  <Card
    v-for="v in ['double', 'usual double']"
    :key="v"
    :loading="v"
    color="brown"
  >
    <CardContent header="Kristy">
      <template #meta>
        <span class="date">Joined in 2013</span>
      </template>
      <template #description>
        Kristy is an art director living in New York.
      </template>
    </CardContent>
    <CardContent extra>
      <Icon name="user" />
      22 Friends
    </CardContent>
  </Card>
<\/template>`
</script>

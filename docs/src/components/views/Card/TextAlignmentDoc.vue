<template>
  <DocSection label="Text Alignment" :code="code">
    <template #description>
      Any element inside a card can have its text alignment specified
    </template>
    <template #example>
      <Card>
        <CardContent>
          <template #header>
            <div class="center aligned">Jenny Hess</div>
          </template>
          <template #description>
            <p class="center aligned">Jenny is a student studying Media Management at the New School</p>
          </template>
        </CardContent>
        <CardContent extra>
          <div class="center aligned">
            <Image avatar src="/vue-fomantic-ui/images/avatar/small/jenny.jpg" />
            Jenny
          </div>
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
  Image,
} from 'vue-fomantic-ui'

const code = `<template>
  <Card>
    <CardContent>
      <template #header>
        <div class="center aligned">Jenny Hess</div>
      </template>
      <template #description>
        <p class="center aligned">Jenny is a student studying Media Management at the New School</p>
      </template>
    </CardContent>
    <CardContent extra>
      <div class="center aligned">
        <Image avatar src="/vue-fomantic-ui/images/avatar/small/jenny.jpg" />
        Jenny
      </div>
    </CardContent>
  </Card>
<\/template>`
</script>

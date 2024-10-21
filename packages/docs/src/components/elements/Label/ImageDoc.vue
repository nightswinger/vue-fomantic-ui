<template>
  <DocSection label="Image" :code="code">
    <template #description>
      A label can be formatted to emphasize an image
    </template>
    <template #example>
      <SuiLabel as="a" image>
        <img src="/images/avatar/small/joe.jpg" />
        Joe
      </SuiLabel>
      <SuiLabel as="a" image color="blue">
        <img src="/images/avatar/small/veronika.jpg" />
        Veronika
        <SuiLabelDetail>Friend</SuiLabelDetail>
      </SuiLabel>
      <SuiLabel as="a" image>
        <img src="/images/avatar/small/elliot.jpg" />
        Elliot
        <SuiIcon name="delete" />
      </SuiLabel>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLabel, SuiLabelDetail, SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiLabel as="a" image>
    <img src="/images/avatar/small/joe.jpg" />
    Joe
  </SuiLabel>
  <SuiLabel as="a" image color="blue">
    <img src="/images/avatar/small/veronika.jpg" />
    Veronika
    <SuiLabelDetail>Friend</SuiLabelDetail>
  </SuiLabel>
  <SuiLabel as="a" image>
    <img src="/images/avatar/small/elliot.jpg" />
    Elliot
    <SuiIcon name="delete" />
  </SuiLabel>
</template>`
</script>

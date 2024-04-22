<template>
  <DocSection label="Inline" :code="code">
    <template #description>
      A dropdown can be formatted to appear inline in other content
    </template>
    <template #example>
      Show me posts by
      <Dropdown
        v-model="selected"
        :options="options"
        inline
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const options = [
  {
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/jenny.jpg' },
  },
  {
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/elliot.jpg' },
  },
  {
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/stevie.jpg' },
  },
  {
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/christian.jpg' },
  },
]
const selected = ref(options[1])

const code = `<template>
  Show me posts by
  <Dropdown
    v-model="selected"
    :options="options"
    inline
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const options = [
  {
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/jenny.jpg' },
  },
  {
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/elliot.jpg' },
  },
  {
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/stevie.jpg' },
  },
  {
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/christian.jpg' },
  },
]
const selected = ref(options[1])
<\/script>`
</script>

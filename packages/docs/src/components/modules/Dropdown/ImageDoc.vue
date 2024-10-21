<template>
  <DocSection label="Image" :code="code">
    <template #description>
      A dropdown menu can contain an image
    </template>
    <template #example>
      <Dropdown
        v-model="selected"
        :options="options"
        button
        floating
        labeled
        icon="add user"
        text="Add User"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const options = [
  { header: 'People You Might Know' },
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
  { header: 'Your Friends\' Friends' },
  {
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/christian.jpg' },
  },
  {
    text: 'Matt',
    value: 'Matt',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/matt.jpg' },
  },
  {
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/justen.jpg' },
  },
]
const selected = ref()

const code = `<template>
  <Dropdown
    v-model="selected"
    :options="options"
    button
    floating
    labeled
    icon="add user"
    text="Add User"
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const options = [
{ header: 'People You Might Know' },
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
  { header: 'Your Friends\' Friends' },
  {
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/christian.jpg' },
  },
  {
    text: 'Matt',
    value: 'Matt',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/matt.jpg' },
  },
  {
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
    image: { avatar: true, src: '/vue-fomantic-ui/images/avatar/small/justen.jpg' },
  },
]
const selected = ref()
<\/script>`
</script>

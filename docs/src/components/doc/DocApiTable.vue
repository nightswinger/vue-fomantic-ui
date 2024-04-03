<template>
  <Header
    as="h2"
    dividing
    :style="{paddingTop: '2rem'}"
  >
    {{ docKey }}
  </Header>
  <template
    v-for="(key, i) in Object.keys(data[docKey])"
    :key="i"
  >
    <template v-if="key === 'props'">
      <Header
        as="h3"
        :style="{
          marginTop: i !== 0 ? '5rem' : '0',
          paddingTop: '2rem',
        }"
      >
        Props
      </Header>
      <Table definition celled :items="data[docKey][key]">
        <Column field="name" />
        <Column field="default" header="Default" />
        <Column field="type" header="Type" />
        <Column field="description" header="Description" />
      </Table>
    </template>

    <Divider hidden />

    <template v-if="key === 'events'">
      <Header as="h3">
        Events
      </Header>
      <Table definition celled :items="data[docKey][key]">
        <Column field="name" />
        <Column field="description" header="Description" />
      </Table>
    </template>

  </template>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Header, Table, Column, Divider } from 'vue-fomantic-ui'

const props = defineProps(['data'])

const index = ref(0)
const docKey = computed(() => Object.keys(props.data)[index.value])
</script>

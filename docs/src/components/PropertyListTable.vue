<template>
  <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Name</sui-table-header-cell>
        <sui-table-header-cell>Type</sui-table-header-cell>
        <sui-table-header-cell>Default</sui-table-header-cell>
        <sui-table-header-cell>Description</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row v-for="prop in properties" :key="prop.name">
        <sui-table-cell>{{ prop.name }}</sui-table-cell>
        <sui-table-cell>{{ prop.type }}</sui-table-cell>
        <sui-table-cell>{{ prop.default }}</sui-table-cell>
        <sui-table-cell>{{ prop.description }}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'PropertyListTable',
  props: {
    properties: Array
  }
})
</script>
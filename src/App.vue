<template>
  <sui-input type="date" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data() {
    return {
      visible1: false,
      rating: 2
    }
  }
})
</script>

<template>
  <div class="detail">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UiLabelDetail",
}) 
</script>
<template>
  <SuiGridRow>
    <SuiGridColumn :width="16">
      <slot></slot>
    </SuiGridColumn>
    <SuiGridColumn :width="16" id="accordion" :aria-hidden="hideCode">
      <div class="inner">
        <pre v-code-highlight><code>{{ code }}
</code></pre>
      </div>

    </SuiGridColumn>
  </SuiGridRow>
</template>

<script setup>
import { vCodeHighlight } from '../../directives/vCodeHighlight'

defineProps(['code', 'hideCode'])
</script>

<style scoped>
#accordion {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
}
#accordion[aria-hidden="false"] {
  grid-template-rows: 1fr;
}
#accordion > .inner {
  overflow: hidden;
}
</style>

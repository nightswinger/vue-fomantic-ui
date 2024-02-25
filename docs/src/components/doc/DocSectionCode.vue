<template>
  <SuiGridRow>
    <SuiGridColumn :width="16">
      <slot></slot>
    </SuiGridColumn>
    <SuiGridColumn :width="16">
      <SuiTransition animation="scale">
        <template v-if="!hideCode">
          <pre v-code-highlight><code>{{ code }}
</code></pre>
        </template>
      </SuiTransition>
    </SuiGridColumn>
  </SuiGridRow>
</template>

<script setup>
import { SuiTransition } from 'vue-fomantic-ui'

import { vCodeHighlight } from '../../directives/vCodeHighlight'

defineProps(['code', 'hideCode'])
</script>

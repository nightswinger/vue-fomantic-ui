<template>
  <section>
    <SuiGrid :columns="2">
      <DocSectionText :label="label" :on-click="onClick" v-bind="$attrs">
        <slot name="description"></slot>
      </DocSectionText>
      <DocSectionCode :code="code" :hide-code="hideCode">
        <slot name="example"></slot>
      </DocSectionCode>
    </SuiGrid>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import DocSectionText from './DocSectionText.vue'
import DocSectionCode from './DocSectionCode.vue'

const hideCode = ref(true)
const onClick = () => hideCode.value = !hideCode.value

defineProps(['label', 'code'])
</script>

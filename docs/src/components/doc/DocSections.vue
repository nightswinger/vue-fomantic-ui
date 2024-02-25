<template>
  <template v-for="(category, i) in categories" :key="category">
    <SuiHeader
      as="h2"
      dividing
      :style="{
        marginTop: i !== 0 ? '5rem' : '0',
        paddingTop: '2rem',
      }"
    >
      {{ category }}
    </SuiHeader>
    <template v-for="(doc, i) in docs.filter(d => d.category === category)" :key="doc.label + '_' + i">
      <div :style="{marginTop: '3rem'}">
        <SuiGrid :columns="2">
          <component :is="doc.component" />
        </SuiGrid>
      </div>
    </template>
  </template>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['docs'])

const categories = computed(() => {
  return [...new Set(props.docs.map(doc => doc.category))]
});
</script>

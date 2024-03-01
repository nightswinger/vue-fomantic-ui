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
      <component :is="doc.component" :id="doc.id" :style="{paddingTop: '3rem'}" />
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

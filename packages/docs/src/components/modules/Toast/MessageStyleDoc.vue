<template>
  <DocSection label="Use Message Style" :code="code">
    <template #description>
      You can use all of the styles and colors from the message component.
    </template>
    <template #example>
      <SuiButton @click="show">Show</SuiButton>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { useToast } from 'vue-fomantic-ui';

const { toast } = useToast();

const show = () => {
  toast({
    messageStyle: true,
    message: 'I got my style from the message class',
    color: 'purple',
  });
};

const code = `<template>
  <SuiButton @click="show">Show</SuiButton>
<\/template>

<script setup>
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const show = () => {
  toast({
    messageStyle: true,
    message: 'I got my style from the message class',
    color: 'purple',
  })
}
<\/script>`
</script>

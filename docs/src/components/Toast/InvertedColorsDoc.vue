<template>
  <DocSection label="Inverted Colors" :code="code">
    <template #description>
      Same as above, just add inverted to the class definition.
    </template>
    <template #example>
      <SuiButton @click="show">Show</SuiButton>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '../doc/DocSection.vue'

import { ref }  from 'vue'
import { useToast } from 'vue-fomantic-ui'

const { toast } = useToast()

const index = ref(0)
const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black']

const show = () => {
  toast({
    color: colors[index.value],
    inverted: true,
    message: 'I am an inverted colorful toast',
    showProgress: 'bottom',
  })
  index.value = (index.value + 1) % colors.length
}
</script>

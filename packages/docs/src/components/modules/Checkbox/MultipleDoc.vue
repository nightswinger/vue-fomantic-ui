<template>
  <DocSection label="Multiple" :code="code">
    <template #description>
      Multiple mode is enabled by default, v-model property refers to an array to bind the selected values
    </template>
    <template #example>
      <Form>
        <FormField>
          Selected values: {{ selected }}
        </FormField>
        <FormField>
          <Checkbox label="Apple" value="Apple" v-model="selected"  />
        </FormField>
        <FormField>
          <Checkbox label="Banana" value="Banana" v-model="selected"  />
        </FormField>
        <FormField>
          <Checkbox label="Chocolate" value="Chocolate" v-model="selected"  />
        </FormField>
      </Form>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Checkbox, Form, FormField } from 'vue-fomantic-ui'

const selected = ref(['Apple'])

const code = `<template>
  <Form>
    <FormField>
      Selected values: {{ selected }}
    </FormField>
    <FormField>
      <Checkbox label="Apple" value="Apple" v-model="selected"  />
    </FormField>
    <FormField>
      <Checkbox label="Banana" value="Banana" v-model="selected"  />
    </FormField>
    <FormField>
      <Checkbox label="Chocolate" value="Chocolate" v-model="selected"  />
    </FormField>
  </Form>
<\/template>

<script setup>
import { ref } from 'vue'
import { Checkbox } from 'vue-fomantic-ui'

const selected = ref(['Apple'])
<\/script>`
</script>

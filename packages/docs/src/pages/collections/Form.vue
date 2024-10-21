<template>
  <DocComponent
    title="Form"
    description="A form displays a set of related user input fields in a structured way"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import FormDoc from '@/components/collections/Form/FormDoc.vue'

// Content
import FieldDoc from '@/components/collections/Form/FieldDoc.vue'
import FieldsDoc from '@/components/collections/Form/FieldsDoc.vue'
import TextAreaDoc from '@/components/collections/Form/TextAreaDoc.vue'

// Form States
import LoadingDoc from '@/components/collections/Form/LoadingDoc.vue'
import SuccessDoc from '@/components/collections/Form/SuccessDoc.vue'
import ErrorDoc from '@/components/collections/Form/ErrorDoc.vue'
import WarningDoc from '@/components/collections/Form/WarningDoc.vue'

// Field States
import DisabledDoc from '@/components/collections/Form/DisabledDoc.vue'

const docs = [
  {
    id: 'form',
    label: 'Form',
    category: 'Types',
    component: FormDoc,
  },
  {
    id: 'field',
    label: 'Field',
    category: 'Content',
    component: FieldDoc,
  },
  {
    id: 'fields',
    label: 'Fields',
    category: 'Content',
    component: FieldsDoc,
  },
  {
    id: 'textarea',
    label: 'TextArea',
    category: 'Content',
    component: TextAreaDoc,
  },
  {
    id: 'loading',
    label: 'Loading',
    category: 'Form States',
    component: LoadingDoc,
  },
  {
    id: 'success',
    label: 'Success',
    category: 'Form States',
    component: SuccessDoc,
  },
  {
    id: 'error',
    label: 'Error',
    category: 'Form States',
    component: ErrorDoc,
  },
  {
    id: 'warning',
    label: 'Warning',
    category: 'Form States',
    component: WarningDoc,
  },
  {
    id: 'disabled',
    label: 'Disabled',
    category: 'Field States',
    component: DisabledDoc,
  },
]
</script>

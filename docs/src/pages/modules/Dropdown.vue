<template>
  <DocComponent
    title="Dropdown"
    description="A dropdown allows a user to select a value from a series of options"
    :component-docs="docs"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import DropdownDoc from '@/components/modules/Dropdown/DropdownDoc.vue'
import SelectionDoc from '@/components/modules/Dropdown/SelectionDoc.vue'
import SearchSelectionDoc from '@/components/modules/Dropdown/SearchSelectionDoc.vue'
import ClearableSelectionDoc from '@/components/modules/Dropdown/ClearableSelectionDoc.vue'
import MultipleSelectionDoc from '@/components/modules/Dropdown/MultipleSelectionDoc.vue'
import MultipleSearchSelectionDoc from '@/components/modules/Dropdown/MultipleSearchSelectionDoc.vue'
import SearchDropdownDoc from '@/components/modules/Dropdown/SearchDropdownDoc.vue'
import SearchInMenuDoc from '@/components/modules/Dropdown/SearchInMenuDoc.vue'
import InlineDoc from '@/components/modules/Dropdown/InlineDoc.vue'
import PointingDoc from '@/components/modules/Dropdown/PointingDoc.vue'
import FloatingDoc from '@/components/modules/Dropdown/FloatingDoc.vue'

// Content
import HeaderDoc from '@/components/modules/Dropdown/HeaderDoc.vue'
import DividerDoc from '@/components/modules/Dropdown/DividerDoc.vue'
import IconDoc from '@/components/modules/Dropdown/IconDoc.vue'
import LabelDoc from '@/components/modules/Dropdown/LabelDoc.vue'
import ImageDoc from '@/components/modules/Dropdown/ImageDoc.vue'

const docs = [
  {
    id: 'dropdown',
    label: 'Dropdown',
    category: 'Types',
    component: DropdownDoc,
  },
  {
    id: 'selection',
    label: 'Selection',
    category: 'Types',
    component: SelectionDoc,
  },
  {
    id: 'search-selection',
    label: 'Search Selection',
    category: 'Types',
    component: SearchSelectionDoc,
  },
  {
    id: 'clearable-selection',
    label: 'Clearable Selection',
    category: 'Types',
    component: ClearableSelectionDoc,
  },
  {
    id: 'multiple-selection',
    label: 'Multiple Selection',
    category: 'Types',
    component: MultipleSelectionDoc,
  },
  {
    id: 'multiple-search-selection',
    label: 'Multiple Search Selection',
    category: 'Types',
    component: MultipleSearchSelectionDoc,
  },
  {
    id: 'search-dropdown',
    label: 'Search Dropdown',
    category: 'Types',
    component: SearchDropdownDoc,
  },
  {
    id: 'search-in-menu',
    label: 'Search In-Menu',
    category: 'Types',
    component: SearchInMenuDoc,
  },
  {
    id: 'inline',
    label: 'Inline',
    category: 'Types',
    component: InlineDoc,
  },
  {
    id: 'pointing',
    label: 'Pointing',
    category: 'Types',
    component: PointingDoc,
  },
  {
    id: 'floating',
    label: 'Floating',
    category: 'Types',
    component: FloatingDoc,
  },
  {
    id: 'header',
    label: 'Header',
    category: 'Content',
    component: HeaderDoc,
  },
  {
    id: 'divider',
    label: 'Divider',
    category: 'Content',
    component: DividerDoc,
  },
  {
    id: 'icon',
    label: 'Icon',
    category: 'Content',
    component: IconDoc,
  },
  {
    id: 'label',
    label: 'Label',
    category: 'Content',
    component: LabelDoc,
  },
  {
    id: 'image',
    label: 'Image',
    category: 'Content',
    component: ImageDoc,
  },
]
</script>

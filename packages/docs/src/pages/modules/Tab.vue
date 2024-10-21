<template>
  <DocComponent
    title="Tab"
    description="A tab is a hidden section of content activated by a menu"
    :component-docs="docs"
    :api-docs="api"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import TabDoc from '@/components/modules/Tab/TabDoc.vue'
import PointingDoc from '@/components/modules/Tab/PointingDoc.vue'
import SecondaryDoc from '@/components/modules/Tab/SecondaryDoc.vue'
import TextDoc from '@/components/modules/Tab/TextDoc.vue'

const docs = [
  {
    id: 'tab',
    label: 'Tab',
    category: 'Types',
    component: TabDoc
  },
  {
    id: 'pointing',
    label: 'Pointing',
    category: 'Types',
    component: PointingDoc
  },
  {
    id: 'secondary',
    label: 'Secondary',
    category: 'Types',
    component: SecondaryDoc
  },
  {
    id: 'text',
    label: 'Text',
    category: 'Types',
    component: TextDoc
  }
]

const api = {
  Tab: {
    props: [
      { name: 'activeIndex', type: 'string', default: 0, description: 'Index of the active tab.' },
      { name: 'pointing', type: 'boolean', default: false, description: '' },
      { name: 'secondary', type: 'boolean', default: false, description: '' },
      { name: 'text', type: 'boolean', default: false, description: '' }
    ],
    events: [
      { name: 'tab-change', description: 'Callback to invoke when an active tab is changed.' },
      { name: 'tab-click', description: 'Callback to invoke when an tab is clicked.' }
    ]
  },
  TabPanel: {
    props: [
      { name: 'header', type: 'boolean', default: 'null', description: 'Orientation of tab headers.' }
    ]
  }
}
</script>

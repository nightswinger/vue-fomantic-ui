<template>
  <DocComponent
    title="Sidebar"
    description="A sidebar hides additional content beside a page."
    :component-docs="docs"
    :api-docs="api"
  />
</template>

<script setup>
import DocComponent from '@/components/doc/DocComponent.vue'

// Types
import SidebarDoc from '@/components/modules/Sidebar/SidebarDoc.vue'
import SidebarPusherDoc from '@/components/modules/Sidebar/SidebarPusherDoc.vue'

const docs = [
  {
    id: 'sidebar',
    label: 'Sidebar',
    category: 'Types',
    component: [SidebarDoc, SidebarPusherDoc],
  },
]

const api = {
  Sidebar: {
    props: [
      { name: 'animation', type: 'string', default: 'overlay', description: 'Specifies the animation of the sidebar.' },
      { name: 'dimmed', type: 'boolean', default: 'false', description: 'When specified, display the dim inside pusher content.' },
      { name: 'direction', type: 'string', default: 'left', description: 'Specifies the direction the sidebar should appear on.' },
      { name: 'visible', type: 'boolean', default: 'false', description: 'Specifies the visibility of the sidebar.' }
    ],
    events: [
      { name: 'change', description: 'Callback to invoke when checkbox value is changed.' },
      { name: 'click', description: 'Callback to invoke when checkbox is clicked.' }
    ]
  }
}
</script>

<template>
  <DocSection :code="code">
    <template #example>
      <List>
        <ListItem
          v-for="item in items"
          :key="item.content"
          :icon="item.icon"
        >
          <template v-if="item.icon === 'mail'">
            <a :href="'mailto:' + item.content">{{ item.content }}</a>
          </template>
          <template v-else-if="item.icon === 'linkify'">
            <a :href="'https://' + item.content">{{ item.content }}</a>
          </template>
          <template v-else>
            {{ item.content }}
          </template>
        </ListItem>
      </List>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { List, ListItem } from 'vue-fomantic-ui'

const items = ref([
  { icon: 'users', content: 'Fomantic UI' },
  { icon: 'marker', content: 'Worldwide' },
  { icon: 'mail', content: 'contact@fomantic-ui.com' },
  { icon: 'linkify', content: 'fomantic-ui.com' },
])

const code = `<template>
  <List>
    <ListItem
      v-for="item in items"
      :key="item.content"
      :icon="item.icon"
    >
      <template v-if="item.icon === 'mail'">
        <a :href="'mailto:' + item.content">{{ item.content }}</a>
      </template>
      <template v-else-if="item.icon === 'linkify'">
        <a :href="'https://' + item.content">{{ item.content }}</a>
      </template>
      <template v-else>
        {{ item.content }}
      </template>
    </ListItem>
  </List>
</template>

<script setup>
import { ref } from 'vue'
import { List, ListItem } from 'vue-fomantic-ui'

const items = ref([
  { icon: 'users', content: 'Fomantic UI' },
  { icon: 'marker', content: 'Worldwide' },
  { icon: 'mail', content: 'contact@fomantic-ui.com' },
  { icon: 'linkify', content: 'fomantic-ui.com' },
])
<\/script>`
</script>

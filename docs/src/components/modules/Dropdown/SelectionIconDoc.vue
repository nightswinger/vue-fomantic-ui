<template>
  <DocSection label="Selection Icon" :code="code">
    <template #description>
      A selection icon dropdown can be used to select between choices in a form,
      with an icon on the left. Icon list is available at
      <a
        href="https://fomantic-ui.com/elements/icon.html"
        rel="noopener noreferrer"
        target="_blank"
      >
        the Fomantic UI website
      </a>
    </template>
    <template #example>
      <Dropdown
        v-model="selected"
        :options="options"
        selection
        fluid
        placeholder="Social Media"
      />
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { icon: 'instagram', text: 'Instagram' },
  { icon: 'facebook f', text: 'Facebook' },
  { icon: 'reddit', text: 'Reddit' },
  { icon: 'tiktok', text: 'Tiktok' },
  { icon: 'twitter', text: 'Twitter' },
  { icon: 'twitch', text: 'Twitch' },
  { icon: 'weibo', text: 'Weibo' }
]

const code = `<template>
  <Dropdown
    v-model="selected"
    :options="options"
    selection
    fluid
    placeholder="Social Media"
  />
<\/template>

<script setup>
import { ref } from 'vue'
import { Dropdown } from 'vue-fomantic-ui'

const selected = ref()
const options = [
  { icon: 'instagram', text: 'Instagram' },
  { icon: 'facebook f', text: 'Facebook' },
  { icon: 'reddit', text: 'Reddit' },
  { icon: 'tiktok', text: 'Tiktok' },
  { icon: 'twitter', text: 'Twitter' },
  { icon: 'twitch', text: 'Twitch' },
  { icon: 'weibo', text: 'Weibo' },
]
<\/script>`
</script>

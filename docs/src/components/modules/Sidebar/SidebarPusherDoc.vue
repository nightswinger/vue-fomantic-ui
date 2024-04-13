<template>
  <DocSection :code="code">
    <template #example>
      <div class="ui top attached demo menu">
        <a class="item" @click="visible = !visible">
          <i class="sidebar icon"></i>
          Menu
        </a>
      </div>
      <Segment attached="bottom">
        <Sidebar
          v-model:visible="visible"
          :items="items"
          icon="labeled"
          :mountOnBody="false"
        />
        <div class="pusher">
          <Segment basic>
            <h3 class="ui header">Application Content</h3>
            <img src="/images/wireframe/short-paragraph.png" />
            <img src="/images/wireframe/short-paragraph.png" />
            <img src="/images/wireframe/short-paragraph.png" />
            <img src="/images/wireframe/short-paragraph.png" />
          </Segment>
        </div>
      </Segment>
    </template>
  </DocSection>
</template>

<script setup lang="ts">
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'
import { Sidebar, Segment } from 'vue-fomantic-ui'

const visible = ref(false)
const items = ref([
  { icon: 'gamepad', text: 'Games' },
  { icon: 'video camera', text: 'Channels' },
  { icon: 'video play', text: 'Videos' },
])

const code = `<template>
  <div class="ui top attached demo menu">
    <a class="item" @click="visible = !visible">
      <i class="sidebar icon"></i>
      Menu
    </a>
  </div>
  <Segment attached="bottom">
    <Sidebar
      v-model:visible="visible"
      :items="items"
      icon="labeled"
      :mountOnBody="false"
      v-bind="args"
    />
    <div class="pusher">
      <Segment basic>
        <h3 class="ui header">Application Content</h3>
        <img src="./wireframe/short-paragraph.png" />
        <img src="./wireframe/short-paragraph.png" />
        <img src="./wireframe/short-paragraph.png" />
        <img src="./wireframe/short-paragraph.png" />
      </Segment>
    </div>
  </Segment>
<\/template>

<script setup>
import { ref } from 'vue'
import { Sidebar, Segment } from 'vue-fomantic-ui'

const visible = ref(false)
const items = ref([
  { icon: 'gamepad', text: 'Games' },
  { icon: 'video camera', text: 'Channels' },
  { icon: 'video play', text: 'Videos' },
])
<\/script>`
</script>

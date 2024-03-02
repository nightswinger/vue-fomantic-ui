<template>
  <DocSection label="Basic" :code="code">
    <template #description>
      A modal can reduce its complexity
    </template>
    <template #example>
      <SuiButton @click="show = true">Basic Modal</SuiButton>
      <SuiModal basic v-model="show">
        <SuiModalHeader icon>
          <SuiIcon name="archive" />
          Archive Old Messages</SuiModalHeader>
        <SuiModalContent>
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
        </SuiModalContent>
        <SuiModalActions>
          <SuiButton
            basic color="red" inverted
            icon="remove"
            content="No"
            @click="show = false"
          />
          <SuiButton
            basic color="green"
            icon="checkmark"
            content="Yes"
          />
        </SuiModalActions>
      </SuiModal>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { ref } from 'vue'

import {
  SuiModal,
  SuiModalActions,
  SuiModalContent,
  SuiModalHeader,
  SuiButton,
  SuiIcon,
} from 'vue-fomantic-ui'

const show = ref(false)

const code = `<template>
  <SuiButton @click="show = true">Basic Modal</SuiButton>
  <SuiModal v-model="show">
    <SuiModalHeader icon>
      <SuiIcon name="archive" />
      Archive Old Messages</SuiModalHeader>
    <SuiModalContent>
      <p>
        Your inbox is getting full, would you like us to enable automatic
        archiving of old messages?
      </p>
    </SuiModalContent>
    <SuiModalActions>
      <SuiButton
        basic color="red" inverted
        icon="remove"
        content="No"
        @click="show = false"
      />
      <SuiButton
        basic color="green"
        icon="checkmark"
        content="Yes"
        @click="show = false"
      />
    </SuiModalActions>
  </SuiModal>
</template>

<script setup>
import {
  SuiModal,
  SuiModalActions,
  SuiModalContent,
  SuiModalHeader,
  SuiButton,
  SuiIcon,
} from 'vue-fomantic-ui'

import { ref } from 'vue'

const show = ref(false)
<\/script>`
</script>

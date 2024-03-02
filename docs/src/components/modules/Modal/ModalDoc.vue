<template>
  <DocSection label="Modal" :code="code">
    <template #description>
      A standard modal
    </template>
    <template #example>
      <SuiButton @click="show = true">Show Modal</SuiButton>
      <SuiModal v-model="show">
        <SuiModalHeader>Select a Photo</SuiModalHeader>
        <SuiModalContent image>
          <SuiImage
            wrapped
            size="medium"
            src="/vue-fomantic-ui/images/avatar/large/rachel.png"
          />
          <SuiModalDescription>
            <SuiHeader>Default Profile Image</SuiHeader>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
          </SuiModalDescription>
        </SuiModalContent>
        <SuiModalActions>
          <SuiButton positive @click="show = false">OK</SuiButton>
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
  SuiModalDescription,
  SuiModalHeader,
  SuiButton,
  SuiHeader,
  SuiImage,
} from 'vue-fomantic-ui'

const show = ref(false)

const code = `<template>
  <SuiButton @click="show = true">Show Modal</SuiButton>
  <SuiModal v-model="show">
    <SuiModalHeader>Select a Photo</SuiModalHeader>
    <SuiModalContent image>
      <SuiImage
        wrapped
        size="medium"
        src="/images/avatar/large/rachel.png"
      />
      <SuiModalDescription>
        <SuiHeader>Default Profile Image</SuiHeader>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </SuiModalDescription>
    </SuiModalContent>
    <SuiModalActions>
      <SuiButton positive @click="show = false">OK</SuiButton>
    </SuiModalActions>
  </SuiModal>

<script setup>
import { ref } from 'vue'
import {
  SuiModal,
  SuiModalActions,
  SuiModalContent,
  SuiModalDescription,
  SuiModalHeader,
  SuiButton,
  SuiHeader,
  SuiImage,
} from 'vue-fomantic-ui'

const show = ref(false)
<\/script>`
</script>

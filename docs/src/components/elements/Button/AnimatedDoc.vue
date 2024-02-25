<template>
  <DocSection label="Animated" :code="code">
    <template #description>
      A button can animate to show hidden content
    </template>
    <template #example>
      <SuiButton animated>
        <SuiButtonContent visible>Next</SuiButtonContent>
        <SuiButtonContent hidden>
          <SuiIcon name="arrow right" />
        </SuiButtonContent>
      </SuiButton>
      <SuiButton animated="vertical">
        <SuiButtonContent visible>
          <SuiIcon name="shop" />
        </SuiButtonContent>
        <SuiButtonContent hidden>Shop</SuiButtonContent>
      </SuiButton>
      <SuiButton animated="fade">
        <SuiButtonContent visible>
          Sign-up for a Pro account
        </SuiButtonContent>
        <SuiButtonContent hidden>$12.99 a month</SuiButtonContent>
      </SuiButton>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiButton, SuiButtonContent, SuiIcon } from 'vue-fomantic-ui'

const code = `<template>
  <SuiButton animated>
    <SuiButtonContent visible>Next</SuiButtonContent>
    <SuiButtonContent hidden>
      <SuiIcon name="arrow right" />
    </SuiButtonContent>
  </SuiButton>
  <SuiButton animated="vertical">
    <SuiButtonContent visible>
      <SuiIcon name="shop" />
    </SuiButtonContent>
    <SuiButtonContent hidden>Shop</SuiButtonContent>
  </SuiButton>
  <SuiButton animated="fade">
    <SuiButtonContent visible>
      Sign-up for a Pro account
    </SuiButtonContent>
    <SuiButtonContent hidden>$12.99 a month</SuiButtonContent>
  </SuiButton>
<\/template>`
</script>

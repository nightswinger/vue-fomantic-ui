<template>
  <DocSection label="Ribbon" :code="code">
    <template #description>
      A label can appear as a ribbon attaching itself to an element.
    </template>
    <template #example>
      <SuiGrid :columns="2">
        <SuiGridColumn>
          <SuiSegment raised>
            <SuiLabel as="a" ribbon color="red">Overview</SuiLabel>
            <span>Account Details</span>
            <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />

            <SuiLabel as="a" ribbon color="blue">Community</SuiLabel>
            <span>User Reviews</span>
            <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
          </SuiSegment>
        </SuiGridColumn>
        <SuiGridColumn>
          <SuiSegment raised>
            <SuiLabel as="a" ribbon="right" color="orange">Specs</SuiLabel>
            <span>Technical Specifications</span>
            <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />

            <SuiLabel as="a" ribbon="right" color="teal">Reviews</SuiLabel>
            <span>User Reviews</span>
            <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
          </SuiSegment>
        </SuiGridColumn>
      </SuiGrid>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiLabel,
  SuiGrid,
  SuiGridColumn,
  SuiSegment,
  SuiImage,
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiGrid :columns="2">
    <SuiGridColumn>
      <SuiSegment raised>
        <SuiLabel as="a" ribbon color="red">Overview</SuiLabel>
        <span>Account Details</span>
        <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />

        <SuiLabel as="a" ribbon color="blue">Community</SuiLabel>
        <span>User Reviews</span>
        <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </SuiSegment>
    </SuiGridColumn>
    <SuiGridColumn>
      <SuiSegment raised>
        <SuiLabel as="a" ribbon="right" color="orange">Specs</SuiLabel>
        <span>Technical Specifications</span>
        <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />

        <SuiLabel as="a" ribbon="right" color="teal">Reviews</SuiLabel>
        <span>User Reviews</span>
        <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
      </SuiSegment>
    </SuiGridColumn>
  </SuiGrid>
</template>`
</script>

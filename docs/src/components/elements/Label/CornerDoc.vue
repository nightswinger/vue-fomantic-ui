<template>
  <DocSection label="Corner" :code="code">
    <template #description>
      A label can position itself in the corner of an element
    </template>
    <template #example>
      <SuiGrid :columns="2">
        <SuiGridColumn>
          <SuiImage
            :label="{ as: 'a', corner: 'left', icon: 'heart' }"
            src="/vue-fomantic-ui/images/wireframe/image.png"
          >
          </SuiImage>
        </SuiGridColumn>
        <SuiGridColumn>
          <SuiImage
            :label="{ as: 'a', color: 'red', corner: 'right', icon: 'save' }"
            src="/vue-fomantic-ui/images/wireframe/image.png"
          >
          </SuiImage>
        </SuiGridColumn>
      </SuiGrid>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiImage, SuiGrid, SuiGridColumn } from 'vue-fomantic-ui'

const code = `<template>
  <SuiGrid :columns="2">
    <SuiGridColumn>
      <SuiImage
        :label="{ as: 'a', corner: 'left', icon: 'heart' }"
        src="/images/wireframe/image.png"
      >
      </SuiImage>
    </SuiGridColumn>
    <SuiGridColumn>
      <SuiImage
        :label="{ as: 'a', color: 'red', corner: 'right', icon: 'save' }"
        src="/images/wireframe/image.png"
      >
      </SuiImage>
    </SuiGridColumn>
  </SuiGrid>
</template>`
</script>

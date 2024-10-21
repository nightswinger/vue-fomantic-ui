<template>
  <DocSection label="Attached" :code="code">
    <template #description>
      A label can attach to a content segment
    </template>
    <template #example>
      <SuiGrid :columns="3">
        <SuiGridRow>
          <SuiGridColumn>
            <SuiSegment padded>
              <SuiLabel attached="top">HTML</SuiLabel>
              <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
            </SuiSegment>
          </SuiGridColumn>
          <SuiGridColumn>
            <SuiSegment padded>
              <SuiLabel attached="bottom">CSS</SuiLabel>
              <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
            </SuiSegment>
          </SuiGridColumn>
          <SuiGridColumn>
            <SuiSegment padded>
              <SuiLabel attached="top right">Code</SuiLabel>
              <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
            </SuiSegment>
          </SuiGridColumn>
        </SuiGridRow>

        <SuiGridRow>
          <SuiGridColumn>
            <SuiSegment padded>
              <SuiLabel attached="top left">View</SuiLabel>
              <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
            </SuiSegment>
          </SuiGridColumn>
          <SuiGridColumn>
            <SuiSegment padded>
              <SuiLabel attached="bottom left">User View</SuiLabel>
              <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
            </SuiSegment>
          </SuiGridColumn>
          <SuiGridColumn>
            <SuiSegment padded>
              <SuiLabel attached="bottom right">Admin View</SuiLabel>
              <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
            </SuiSegment>
          </SuiGridColumn>
        </SuiGridRow>
      </SuiGrid>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import {
  SuiLabel,
  SuiGrid,
  SuiGridRow,
  SuiGridColumn,
  SuiSegment,
  SuiImage,
} from 'vue-fomantic-ui'

const code = `<template>
  <SuiGrid :columns="3">
    <SuiGridRow>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="top">HTML</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="bottom">CSS</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="top right">Code</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
    </SuiGridRow>

    <SuiGridRow>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="top left">View</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="bottom left">User View</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
      <SuiGridColumn>
        <SuiSegment padded>
          <SuiLabel attached="bottom right">Admin View</SuiLabel>
          <SuiImage src="/vue-fomantic-ui/images/wireframe/paragraph.png" />
        </SuiSegment>
      </SuiGridColumn>
    </SuiGridRow>
  </SuiGrid>
</template>`
</script>

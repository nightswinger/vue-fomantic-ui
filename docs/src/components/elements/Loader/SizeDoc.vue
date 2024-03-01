<template>
  <DocSection label="Size" :code="code">
    <template #description>
      Loaders can have different sizes
    </template>
    <template #example>
      <SuiSegment>
        <SuiDimmer active>
          <SuiLoader text size="mini">Loading</SuiLoader>
        </SuiDimmer>

        <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
      </SuiSegment>

      <SuiSegment>
        <SuiDimmer active>
          <SuiLoader text size="tiny">Loading</SuiLoader>
        </SuiDimmer>

        <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
      </SuiSegment>

      <SuiSegment>
        <SuiDimmer active>
          <SuiLoader text size="small">Loading</SuiLoader>
        </SuiDimmer>

        <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
      </SuiSegment>

      <SuiSegment>
        <SuiDimmer active>
          <SuiLoader text size="large">Loading</SuiLoader>
        </SuiDimmer>

        <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
        <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
      </SuiSegment>

      <SuiSegment>
        <SuiDimmer active>
          <SuiLoader text size="big">Loading</SuiLoader>
        </SuiDimmer>

        <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
        <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
      </SuiSegment>

      <SuiSegment>
        <SuiDimmer active>
          <SuiLoader text size="huge">Loading</SuiLoader>
        </SuiDimmer>

        <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
        <SuiImage src="/vue-fomantic-ui/images/wireframe/short-paragraph.png" />
      </SuiSegment>
    </template>
  </DocSection>
</template>

<script setup>
import DocSection from '@/components/doc/DocSection.vue'

import { SuiLoader, SuiSegment, SuiDimmer, SuiImage } from 'vue-fomantic-ui'

const code = `<template>
  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="mini">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>

  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="tiny">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>

  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="small">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>

  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="large">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>

  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="big">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>

  <SuiSegment>
    <SuiDimmer active>
      <SuiLoader text size="huge">Loading</SuiLoader>
    </SuiDimmer>

    <SuiImage src="/images/wireframe/short-paragraph.png" />
    <SuiImage src="/images/wireframe/short-paragraph.png" />
  </SuiSegment>
</template>`
</script>

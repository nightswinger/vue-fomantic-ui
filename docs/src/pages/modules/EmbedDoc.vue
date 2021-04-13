<template>
  <div>
    <doc-page-header
      title="Embed"
      sub="An embed displays content from other websites like YouTube videos or Google Maps"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="YouTube"
        description="An embed can be used to display YouTube Content"
        :code="youtubeCode"
      >
        <sui-embed
          id="O6Xo21L0ybE"
          placeholder="/images/wireframe/image-16by9.png"
          source="youtube"
        />
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Aspect Ratio"
        description="An embed can specify an alternative aspect ratio"
        :code="aspectRatioCode"
      >
        <sui-embed
          aspectRatio="4:3"
          id="HTZudKi36bo"
          placeholder="/images/wireframe/image-16by9.png"
          source="youtube"
        />
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'EmbedDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const youtubeCode = `<sui-embed
  id="O6Xo21L0ybE"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`

    const aspectRatioCode = `<sui-embed
  aspectRatio="4:3"
  id="HTZudKi36bo"
  placeholder="/images/wireframe/image-16by9.png"
  source="youtube"
/>`

    return {
      youtubeCode,
      aspectRatioCode
    }
  }
})
</script>
<template>
  <div>
    <doc-page-header
      title="Dimmer"
      sub="A dimmer hides distractions to focus attention on particular content"
    />

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Dimmer"
        description="A simple dimmer displays no content"
        :code="dimmerCode"
      >
        <sui-dimmer-dimmable>
          <sui-header as="h3">Overlayable Section</sui-header>
          <sui-image-group size="small">
            <sui-image src="/images/wireframe/image.png" />
            <sui-image src="/images/wireframe/image.png" />
            <sui-image src="/images/wireframe/image.png" />
          </sui-image-group>
          <sui-image size="medium" src="/images/wireframe/media-paragraph.png" />
          
          <sui-dimmer active />
        </sui-dimmer-dimmable>
      </doc-example>

      <doc-example
        title="Content Dimmer"
        description="A dimmer can display content"
        :code="contentDimmerCode"
      >
        <sui-dimmer-dimmable>
          <sui-header as="h3">Overlayable Section</sui-header>
          <sui-image-group size="small">
            <sui-image src="/images/wireframe/image.png" />
            <sui-image src="/images/wireframe/image.png" />
            <sui-image src="/images/wireframe/image.png" />
          </sui-image-group>
          <sui-image size="medium" src="/images/wireframe/media-paragraph.png" />
          
          <sui-dimmer active>
            <sui-header as="h2" icon inverted>
              <sui-icon name="heart" />
              Dimmed Message!
            </sui-header>
          </sui-dimmer>
        </sui-dimmer-dimmable>
      </doc-example>

      <doc-example
        title="Page Dimmer"
        description="A dimmer can be formatted to be fixed to the page"
        :code="pageDimmerCode"
      >
        <div>
          <sui-button labeled icon @click="active = true">
            <sui-icon name="plus" />
            Show
          </sui-button>

          <sui-dimmer :active="active" page @click="active = false">
            <sui-header as="h2" icon inverted>
              <sui-icon name="heart" />
              Dimmed Message!
              <sui-header-subheader>Dimmer sub-header</sui-header-subheader>
            </sui-header>
          </sui-dimmer>
        </div>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import DocPageHeader from '../../components/DocPageHeader.vue'
import DocExample from '../../components/DocExample.vue'

export default defineComponent({
  name: 'DimmerDoc',
  components: { DocPageHeader, DocExample },
  setup() {
    const dimmerCode = `<sui-dimmer-dimmable>
  <sui-header as="h3">Overlayable Section</sui-header>
  <sui-image-group size="small">
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
  </sui-image-group>
  <sui-image size="medium" src="/images/wireframe/media-paragraph.png" />
  
  <sui-dimmer active />
</sui-dimmer-dimmable>`

    const contentDimmerCode = `<sui-dimmer-dimmable>
  <sui-header as="h3">Overlayable Section</sui-header>
  <sui-image-group size="small">
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
    <sui-image src="/images/wireframe/image.png" />
  </sui-image-group>
  <sui-image size="medium" src="/images/wireframe/media-paragraph.png" />
  
  <sui-dimmer active>
    <sui-header as="h2" icon inverted>
      <sui-icon name="heart" />
      Dimmed Message!
    </sui-header>
  </sui-dimmer>
</sui-dimmer-dimmable>`

    const active = ref(false)
    const pageDimmerCode = `<div>
  <sui-button labeled icon @click="active = true">
    <sui-icon name="plus" />
    Show
  </sui-button>

  <sui-dimmer :active="active" page @click="active = false">
    <sui-header as="h2" icon inverted>
      <sui-icon name="heart" />
      Dimmed Message!
      <sui-header-subheader>Dimmer sub-header</sui-header-subheader>
    </sui-header>
  </sui-dimmer>
</div>`

    return {
      dimmerCode,
      contentDimmerCode,
      active,
      pageDimmerCode
    }
  }
})
</script>
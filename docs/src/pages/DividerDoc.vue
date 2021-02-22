<template>
  <div>
    <sui-segment vertical>
      <sui-container class="main">
        <div class="intro">
          <sui-header as="h1">Divider
            <sui-header-subheader>A divider visually segments content into groups</sui-header-subheader>
          </sui-header>

          <sui-divider hidden />

          <sui-menu floated="right">
            <sui-menu-item as="a" icon>
              <sui-icon name="edit"></sui-icon>
            </sui-menu-item>
            <sui-menu-item as="a" icon>
              <sui-icon name="github"></sui-icon>
            </sui-menu-item>
          </sui-menu>
        </div>
      </sui-container>
    </sui-segment>

    <sui-container class="main">
      <sui-header as="h2" dividing>Types</sui-header>

      <doc-example
        title="Divider"
        description="A standard divider"
        :code="dividerCode"
      >
        <div>
          <sui-image src="/images/wireframe/short-paragraph.png" />
          <sui-divider />
          <sui-image src="/images/wireframe/short-paragraph.png" />
        </div>

      </doc-example>

      <doc-example
        title="Vertical Divider"
        description="A divider can segment content vertically"
        :code="verticalDividerCode"
      >
        <sui-segment>
          <sui-grid :columns="2" relaxed="very">
            <sui-grid-column>
              <sui-image src="/images/wireframe/short-paragraph.png" />
            </sui-grid-column>
            <sui-grid-column>
              <sui-image src="/images/wireframe/short-paragraph.png" />
            </sui-grid-column>
          </sui-grid>
          <sui-divider vertical>and</sui-divider>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Horizontal Divider"
        description="A divider can segment content horizontally"
        :code="horizontalDividerCode"
      >
        <sui-segment>
          <sui-grid relaxed="very">
            <sui-grid-column>
              <sui-image src="/images/wireframe/short-paragraph.png" />
            </sui-grid-column>
          </sui-grid>
          <sui-divider horizontal>and</sui-divider>
          <sui-grid relaxed="very">
            <sui-grid-column>
              <sui-image src="/images/wireframe/short-paragraph.png" />
            </sui-grid-column>
          </sui-grid>
        </sui-segment>
      </doc-example>

      <doc-example
        title="Horizontal Alignment"
        description="A horizontal divider can be aligned"
        :code="horizontalAlignmentCode"
      >
        <div>
          <sui-divider horizontal textAlign="left">
            <sui-header as="h4">
              <sui-icon name="left align" />
              Left Aligned
            </sui-header>
          </sui-divider>
          <sui-divider horizontal textAlign="center">
            <sui-header as="h4">
              <sui-icon name="center align" />
              Center Aligned
            </sui-header>
          </sui-divider>
          <sui-divider horizontal textAlign="right">
            <sui-header as="h4">
              <sui-icon name="right align" />
              Right Aligned
            </sui-header>
          </sui-divider>
        </div>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Inverted"
        description="A divider can have its colors inverted"
        :code="invertedCode"
      >
        <sui-segment inverted>
          <sui-image src="/images/wireframe/short-paragraph.png" />
          <sui-divider inverted />
          <sui-image src="/images/wireframe/short-paragraph.png" />
        </sui-segment>
      </doc-example>

      <doc-example
        title="Fitted"
        description="A divider can be fitted, without any space above or below it"
        :code="fittedCode"
      >
        <sui-segment>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
          <sui-divider fitted />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
        </sui-segment>
      </doc-example>

      <doc-example
        title="Hidden"
        description="A hidden divider divides content without creating a dividing line"
        :code="hiddenCode"
      >
        <div>
          <sui-header as="h3">Section One</sui-header>
          <sui-image src="/images/wireframe/short-paragraph.png" />
          <sui-divider hidden />
          <sui-header as="h3">Section Two</sui-header>
          <sui-image src="/images/wireframe/short-paragraph.png" />
        </div>
      </doc-example>

      <doc-example
        title="Section"
        description="A divider can provide greater margins to divide sections of content"
        :code="sectionCode"
      >
        <div>
          <sui-header as="h3">Section One</sui-header>
          <sui-image src="/images/wireframe/short-paragraph.png" />
          <sui-divider section />
          <sui-header as="h3">Section Two</sui-header>
          <sui-image src="/images/wireframe/short-paragraph.png" />
        </div>
      </doc-example>

      <doc-example
        title="Clearing"
        description="A divider can clear the contents above it"
        :code="clearingCode"
      >
        <sui-segment>
          <sui-header floated="right">Floated Content</sui-header>
          <sui-divider clearing />
          <sui-image src="/images/wireframe/short-paragraph.png" />
        </sui-segment>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocExample from '../components/DocExample.vue'

export default defineComponent({
  name: 'DividerDoc',
  components: { DocExample },
  setup() {
    const dividerCode = `<div>
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
  <sui-divider />
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
</div>`

    const verticalDividerCode = `<sui-segment>
  <sui-grid :columns="2" relaxed="very">
    <sui-grid-column>
      <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
    </sui-grid-column>
    <sui-grid-column>
      <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
    </sui-grid-column>
  </sui-grid>
  <sui-divider vertical>and</sui-divider>
</sui-segment>`

    const horizontalDividerCode = `<sui-segment>
  <sui-grid relaxed="very">
    <sui-grid-column>
      <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
    </sui-grid-column>
  </sui-grid>
  <sui-divider horizontal>and</sui-divider>
  <sui-grid relaxed="very">
    <sui-grid-column>
      <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
    </sui-grid-column>
  </sui-grid>
</sui-segment>`

    const horizontalAlignmentCode = `<div>
  <sui-divider horizontal textAlign="left">
    <sui-header as="h4">
      <sui-icon name="left align" />
      Left Aligned
    </sui-header>
  </sui-divider>
  <sui-divider horizontal textAlign="center">
    <sui-header as="h4">
      <sui-icon name="center align" />
      Center Aligned
    </sui-header>
  </sui-divider>
  <sui-divider horizontal textAlign="right">
    <sui-header as="h4">
      <sui-icon name="right align" />
      Right Aligned
    </sui-header>
  </sui-divider>
</div>`

    const invertedCode = `<sui-segment inverted>
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
  <sui-divider inverted />
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
</sui-segment>`

    const fittedCode = `<sui-segment>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
  Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
  <sui-divider fitted />
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. 
  Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
</sui-segment>`

    const hiddenCode = `<div>
  <sui-header as="h3">Section One</sui-header>
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
  <sui-divider hidden />
  <sui-header as="h3">Section Two</sui-header>
  <sui-image wireframe src="/images/wireframe/short-paragraph.png" />
</div>`

    const sectionCode = `<div>
  <sui-header as="h3">Section One</sui-header>
  <sui-image src="/images/wireframe/short-paragraph.png" />
  <sui-divider section />
  <sui-header as="h3">Section Two</sui-header>
  <sui-image src="/images/wireframe/short-paragraph.png" />
</div>`

    const clearingCode = `<sui-segment>
  <sui-header floated="right">Floated Content</sui-header>
  <sui-divider clearing />
  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`

    return {
      dividerCode,
      verticalDividerCode,
      horizontalDividerCode,
      horizontalAlignmentCode,
      invertedCode,
      fittedCode,
      hiddenCode,
      sectionCode,
      clearingCode
    }
  }
})
</script>

<style scoped>
.ui.container.main {
  margin-left: 3rem !important;
  width: auto !important;
  max-width: 960px !important;
}

.intro:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.main {
  padding: 2rem 0rem;
}

.main > h2 {
  margin: 5rem 0rem 3rem;
}

.example {
  padding: 2rem 0rem;
}
</style>
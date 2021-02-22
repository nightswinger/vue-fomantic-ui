<template>
  <div>
    <sui-segment vertical>
      <sui-container class="main">
        <div class="intro">
          <sui-header as="h1">Loader
            <sui-header-subheader>
              A loader alerts a user to wait for an activity to complete
            </sui-header-subheader>
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
        title="Loader"
        description="A loader"
        :code="loaderCode"
      >
        <sui-segment>
          <sui-dimmer active>
            <sui-loader />
          </sui-dimmer>

          <sui-image src="/images/wireframe/short-paragraph.png" />
        </sui-segment>
      </doc-example>

      <doc-example
        title="Text Loader"
        description="A loader can contain text"
        :code="textLoaderCode"
      >
        <sui-segment>
          <sui-dimmer active>
            <sui-loader>Loading</sui-loader>
          </sui-dimmer>

          <sui-image src="/images/wireframe/short-paragraph.png" />
        </sui-segment>
      </doc-example>

      <sui-header as="h2" dividing>States</sui-header>

      <doc-example
        title="Indeterminate"
        description="A loader can show it's unsure of how long a task will take"
        :code="indeterminateCode"
      >
        <sui-segment>
          <sui-dimmer active>
            <sui-loader indeterminate>Preparing Files</sui-loader>
          </sui-dimmer>

          <sui-image src="/images/wireframe/short-paragraph.png" />
        </sui-segment>
      </doc-example>

      <doc-example
        title="Active"
        description="A loader can be active or visible"
        :code="activeCode"
      >
        <sui-segment>
          <sui-loader active />

          <sui-image src="/images/wireframe/short-paragraph.png" />
        </sui-segment>
      </doc-example>

      <doc-example
        title="Diasbled"
        description="A loader can be disabled or hidden"
        :code="disabledCode"
      >
        <sui-segment>
          <sui-loader disabled />

          <sui-image src="/images/wireframe/short-paragraph.png" />
        </sui-segment>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Inline"
        description="Loaders can appear inline with content"
        :code="inlineCode"
      >
        <sui-loader inline active />
      </doc-example>

      <doc-example
        title="Inline Center"
        description="Loaders can appear inline centered with content"
        :code="inlineCenterCode"
      >
        <sui-loader inline="centered" active />
      </doc-example>

      <doc-example
        title="Speed"
        description="Loaders can appear slow, normal or fast"
        :code="speedCode"
      >
        <div>
          <sui-loader slow active inline />
          <sui-loader active inline />
          <sui-loader fast active inline />
        </div>
      </doc-example>

      <doc-example
        title="Colors"
        description="Loaders can be different colors"
        :code="colorsCode"
      >
        <div>
          <sui-loader color="primary" inline active />
          <sui-loader color="secondary" inline active />
          <sui-loader color="red" inline active />
          <sui-loader color="orange" inline active />
          <sui-loader color="yellow" inline active />
          <sui-loader color="olive" inline active />
          <sui-loader color="green" inline active />
          <sui-loader color="teal" inline active />
          <sui-loader color="blue" inline active />
          <sui-loader color="violet" inline active />
          <sui-loader color="purple" inline active />
          <sui-loader color="pink" inline active />
          <sui-loader color="brown" inline active />
          <sui-loader color="grey" inline active />
          <sui-loader color="black" inline active />
        </div>
      </doc-example>

      <doc-example
        title="Size"
        description="Loaders can have different sizes"
        :code="sizeCode"
      >
        <sui-segment>
          <sui-dimmer active>
            <sui-loader size="mini">Loading</sui-loader>
          </sui-dimmer>

          <sui-image src="/images/wireframe/short-paragraph.png" />
        </sui-segment>
      </doc-example>

      <doc-example
        title="Inverted"
        description="Loaders can have their colors inverted"
        :code="invertedCode"
      >
        <sui-segment>
          <sui-dimmer active inverted>
            <sui-loader>Loading</sui-loader>
          </sui-dimmer>

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
  name: 'LoaderDoc',
  components: { DocExample },
  setup() {
    const loaderCode = `<sui-segment>
  <sui-dimmer active>
    <sui-loader />
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`

    const textLoaderCode = `<sui-segment>
  <sui-dimmer active>
    <sui-loader text>Loading</sui-loader>
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`

    const indeterminateCode = `<sui-segment>
  <sui-dimmer active>
    <sui-loader indeterminate>Preparing Files</sui-loader>
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`

    const activeCode = `<sui-segment>
  <sui-loader active />

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`

    const disabledCode = `<sui-segment>
  <sui-loader disabled />

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`

    const inlineCode = `<sui-loader inline active />`
    const inlineCenterCode = `<sui-loader inline="centered" active />`

    const speedCode = `<div>
  <sui-loader slow active inline />
  <sui-loader active inline />
  <sui-loader fast active inline />
</div>`

    const colorsCode = `<div>
  <sui-loader color="primary" inline active />
  <sui-loader color="secondary" inline active />
  <sui-loader color="red" inline active />
  <sui-loader color="orange" inline active />
  <sui-loader color="yellow" inline active />
  <sui-loader color="olive" inline active />
  <sui-loader color="green" inline active />
  <sui-loader color="teal" inline active />
  <sui-loader color="blue" inline active />
  <sui-loader color="violet" inline active />
  <sui-loader color="purple" inline active />
  <sui-loader color="pink" inline active />
  <sui-loader color="brown" inline active />
  <sui-loader color="grey" inline active />
  <sui-loader color="black" inline active />
</div>`

    const sizeCode = `<sui-segment>
  <sui-dimmer active>
    <sui-loader size="mini">Loading</sui-loader>
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`

    const invertedCode = `<sui-segment>
  <sui-dimmer active inverted>
    <sui-loader>Loading</sui-loader>
  </sui-dimmer>

  <sui-image src="/images/wireframe/short-paragraph.png" />
</sui-segment>`

    return {
      loaderCode,
      textLoaderCode,
      indeterminateCode,
      activeCode,
      disabledCode,
      inlineCode,
      inlineCenterCode,
      speedCode,
      colorsCode,
      sizeCode,
      invertedCode
    }
  }
})
</script>
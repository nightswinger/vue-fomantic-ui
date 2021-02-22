<template>
  <div>
    <sui-segment vertical>
      <sui-container class="main">
        <div class="intro">
          <sui-header as="h1">Reveal
            <sui-header-subheader>
              A reveal displays additional content in place of previous content when activated
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
        title="Fade"
        description="An element can disappear to reveal content below"
        :code="fadeCode"
      >
        <sui-reveal animated="fade">
          <sui-reveal-content visible>
            <sui-image size="small" src="/images/wireframe/square-image.png" />
          </sui-reveal-content>
          <sui-reveal-content hidden>
            <sui-image size="small" src="/images/avatar/large/ade.jpg" />
          </sui-reveal-content>
        </sui-reveal>
      </doc-example>

      <doc-example
        title="Move"
        description="An element can move in a direction to reveal content"
        :code="moveCode"
      >
        <sui-reveal animated="move">
          <sui-reveal-content visible>
            <sui-image size="small" src="/images/wireframe/square-image.png" />
          </sui-reveal-content>
          <sui-reveal-content hidden>
            <sui-image size="small" src="/images/avatar/large/chris.jpg" />
          </sui-reveal-content>
        </sui-reveal>
      </doc-example>

      <doc-example
        title="Rotate"
        description="An element can rotate to reveal content below"
        :code="rotateCode"
      >
        <sui-reveal animated="rotate">
          <sui-reveal-content visible>
            <sui-image circular size="small" src="/images/wireframe/square-image.png" />
          </sui-reveal-content>
          <sui-reveal-content hidden>
            <sui-image circular size="small" src="/images/avatar/large/stevie.jpg" />
          </sui-reveal-content>
        </sui-reveal>
      </doc-example>

      <sui-header as="h2" dividing>States</sui-header>

      <doc-example
        title="Active"
        description="An active reveal displays its hidden content"
        :code="activeCode"
      >
        <sui-reveal active animated="move">
          <sui-reveal-content visible>
            <sui-image size="small" src="/images/wireframe/square-image.png" />
          </sui-reveal-content>
          <sui-reveal-content hidden>
            <sui-image size="small" src="/images/avatar/large/nan.jpg" />
          </sui-reveal-content>
        </sui-reveal>
      </doc-example>

      <doc-example
        title="Disabled"
        description="A disabled reveal will not animate when hovered"
        :code="disabledCode"
      >
        <sui-reveal disabled animated="move">
          <sui-reveal-content visible>
            <sui-image size="small" src="/images/wireframe/square-image.png" />
          </sui-reveal-content>
          <sui-reveal-content hidden>
            <sui-image size="small" src="/images/avatar/large/nan.jpg" />
          </sui-reveal-content>
        </sui-reveal>
      </doc-example>

      <sui-header as="h2" dividing>Variations</sui-header>

      <doc-example
        title="Instant"
        description="An element can show its content without delay"
        :code="instantCode"
      >
        <sui-reveal instant animated="move">
          <sui-reveal-content visible>
            <sui-image size="small" src="/images/wireframe/square-image.png" />
          </sui-reveal-content>
          <sui-reveal-content hidden>
            <sui-image size="small" src="/images/avatar/large/chris.jpg" />
          </sui-reveal-content>
        </sui-reveal>
      </doc-example>
    </sui-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import DocExample from '../components/DocExample.vue'

export default defineComponent({
  name: 'RevealDoc',
  components: { DocExample },
  setup() {
    const fadeCode = `<sui-reveal animated="fade">
  <sui-reveal-content visible>
    <sui-image size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image size="small" src="/images/avatar/large/ade.jpg" />
  </sui-reveal-content>
</sui-reveal>`

    const moveCode = `<sui-reveal animated="move">
  <sui-reveal-content visible>
    <sui-image size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image size="small" src="/images/avatar/large/chris.jpg" />
  </sui-reveal-content>
</sui-reveal>`

    const rotateCode = `<sui-reveal animated="rotate">
  <sui-reveal-content visible>
    <sui-image circular size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image circular size="small" src="/images/avatar/large/stevie.jpg" />
  </sui-reveal-content>
</sui-reveal>`

    const activeCode = `<sui-reveal active animated="move">
  <sui-reveal-content visible>
    <sui-image size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image size="small" src="/images/avatar/large/nan.jpg" />
  </sui-reveal-content>
</sui-reveal>`

    const disabledCode = `<sui-reveal disabled animated="move">
  <sui-reveal-content visible>
    <sui-image size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image size="small" src="/images/avatar/large/nan.jpg" />
  </sui-reveal-content>
</sui-reveal>`

    const instantCode = `<sui-reveal instant animated="move">
  <sui-reveal-content visible>
    <sui-image size="small" src="/images/wireframe/square-image.png" />
  </sui-reveal-content>
  <sui-reveal-content hidden>
    <sui-image size="small" src="/images/avatar/large/chris.jpg" />
  </sui-reveal-content>
</sui-reveal>`

    return {
      fadeCode,
      moveCode,
      rotateCode,
      activeCode,
      disabledCode,
      instantCode
    }
  }
})
</script>